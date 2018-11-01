import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { sources, queryParams } from './facebook-utils';
import { FeedService } from '../feeds/feed.service';
import { sourceNames } from '../feeds/feed.sources';
const config = new ConfigService();

import FB from 'fb';
FB.setAccessToken(config.facebookPageToken);

@Injectable()
export class FacebookFeedService {

    constructor(
        private readonly feedService: FeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('FacebookFeedService');
    }

    onModuleInit() {
        this.fetchAndSaveFacebookFeeds();
    }

    async fetchAndSaveFacebookFeeds() {
        this.logger.log('Fetching facebook feeds Started');
        FB.api(`${sources.vantaa}/posts`, { fields: queryParams })
            .then(this.filterAlreadyExistingFeeds)
            .then(this.addProfileImage)
            .then(this.transformData)
            .then(this.persistIntoDb)
            .then(() => this.logger.log('Fetching facebook feeds Completed'))
            .catch(error => this.logger.error(`Failed to get facebook feeds: ${error}`));

    }

    persistIntoDb = feeds => this.feedService.saveFeeds(feeds);

    addProfileImage = async feeds => {
        return await Promise.all(
            feeds.map(async feed => {
                let profileImage;
                try {
                    profileImage = await this.fetchProfileImage(feed.from.id);
                } catch (error) {
                    this.logger.error(`Failed to get profile Image: ${error}`)
                }
                return {
                    ...feed,
                    author_thumbnail: profileImage ? profileImage.data.url : null
                }
            }));
    }

    filterAlreadyExistingFeeds = (feeds) => {
        return this.feedService.fetchFeedsBySource(sourceNames.FACEBOOK).
            then(existingFeeds => existingFeeds.map(feed => feed.feed_id)).
            then(existingFeedIds => feeds.data.filter(feed => !existingFeedIds.includes(feed.id)));
    }

    transformData = feeds => {

        return feeds.map(feed => {
            const feed_id = feed.id;
            delete feed.id;
            return {
                author: feed.from.name,
                author_thumbnail: feed.author_thumbnail,
                likes: feed.reactions ? feed.reactions.data.length : null,
                description: feed.story ? feed.story : feed.message,
                type: feed.story ? 'STORY' : 'MESSAGE',
                source: sourceNames.FACEBOOK,
                title: feed.status_type,
                pub_date: feed.created_time,
                image_url: feed.picture,
                page_link: feed.link,
                feed_id
            }
        });
    }

    fetchProfileImage = (id: number) => {
        return FB.api(`${id}/picture`, {
            "redirect": "0"
        });
    }
}