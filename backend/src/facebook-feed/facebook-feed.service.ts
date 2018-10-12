import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { sources, queryParams } from './facebook-utils';
import { FeedService } from '../feeds/feed.service';
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
        this.fetchFacebookFeeds();
    }

    async fetchFacebookFeeds() {
        this.logger.log('Fetching facebook feeds Started');
        FB.api(`${sources.vantaa}/posts`, { fields: queryParams })
            .then(this.addProfileImage)
            .then(this.transformData)
            .then((feeds) => {
                this.persistIntoDb(feeds);
                this.logger.log('Fetching facebook feeds Completed');
            })
            .catch(error => this.logger.error(`Failed to get facebook feeds: ${error}`));

    }

    persistIntoDb = feeds => this.feedService.saveFeeds(feeds);

    addProfileImage = async feeds => {
        return await Promise.all(
            feeds.data.map(async feed => {
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

    transformData = feeds => {
        return feeds.map(feed => {
            const feed_id = feed.id;
            delete feed.id;
            return {
                author: feed.from.name,
                author_thumbnail: feed.author_thumbnail,
                likes: feed.reactions ? feed.reactions.data.length : null,
                description: feed.story ? feed.story : feed.message,
                source: 'Facebook',
                title: feed.status_type,
                pub_date: feed.created_time,
                image_url: feed.picture,
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