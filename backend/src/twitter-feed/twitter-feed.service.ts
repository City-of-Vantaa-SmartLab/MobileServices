import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { FeedService } from '../feeds/feed.service';
const config = new ConfigService();
const Twitter = require('twitter')

const twitter = new Twitter({
    consumer_key: config.twitterConsumerKey,
    consumer_secret: config.twitterConsumerSecret,
    access_token_key: config.twitterTokenKey,
    access_token_secret: config.twitterTokenSecret,
})

@Injectable()
export class TwitterFeedService {

    constructor(
        private readonly feedService: FeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('TwitterFeedService');
    }

    onModuleInit() {
        this.fetchTwitterFeeds();
    }

    async fetchTwitterFeeds() {
        this.logger.log('Fetching Twitter feeds Started');
        const params = { screen_name: 'VantaanKaupunki' };
        await twitter.get('statuses/user_timeline', params)
            .then(this.transformData)
            .then(this.persistIntoDb)
            .catch(error => this.logger.error(`Failed to fetch Twitter feeds :${error}`));
        this.logger.log('Fetching Twitter feeds Completed');
    }

    persistIntoDb = feeds => this.feedService.saveFeeds(feeds);

    transformData = feeds => {
        return feeds.map(feed => {
            const feed_id = feed.id;
            delete feed.id;
            return {
                author: feed.user.name,
                author_thumbnail: feed.user.profile_image_url_https,
                likes: feed.favorite_count,
                description: feed.text,
                source: 'Twitter',
                pub_date: feed.created_at,
                feed_id
            }
        });
    }
}