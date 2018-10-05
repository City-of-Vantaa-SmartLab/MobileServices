import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { sources, queryParams } from './facebook-utils';
import { FeedService } from '../feeds/feed.service';
const config = new ConfigService();
const axios = require('axios');

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
        try {
            this.logger.log('Fetching facebook feeds Started');
            const vantaaFacebookDataUrl = `${config.facebookGraphApi}${sources.vantaa}/posts?`
                + `fields=${queryParams.join(',')}`
                + `&access_token=${config.facebookPageToken}`;
            const facebookFeeds = this.transformData((await axios.get(vantaaFacebookDataUrl)).data.data);
            await this.feedService.saveFeeds(facebookFeeds);
            this.logger.log('Fetching facebook feeds Completed');
        } catch (error) {
            this.logger.error(`Failed to get facebook feeds: ${error}`)
        }
    }

    transformData = feeds => {
        return feeds.map(feed => {
            const feed_id = feed.id;
            delete feed.id;
            return {
                ...feed,
                comments: feed.comments ? feed.comments.data : null,
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
}