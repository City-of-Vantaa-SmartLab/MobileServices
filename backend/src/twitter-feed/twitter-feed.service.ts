import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { FeedService } from '../feeds/feed.service';
import { sourceNames } from 'feeds/feed.sources';
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
        this.fetchAndSaveTwitterFeeds();
        setInterval(() => {
            this.fetchAndSaveTwitterFeeds();
        }, config.socialMediaUpdateInterval);
    }

    async fetchAndSaveTwitterFeeds() {
        this.logger.log('Fetching Twitter feeds Started');
        const params = { screen_name: 'VantaanKaupunki' };
        await twitter.get('statuses/user_timeline', params)
            .then(this.filterAlreadyExistingFeeds)
            .then(this.transformData)
            .then(this.persistIntoDb)
            .then(() => this.logger.log('Fetching Twitter feeds Completed'))
            .catch(error => this.logger.error(`Failed to fetch Twitter feeds :${error}`));
    }

    persistIntoDb = feeds => this.feedService.saveFeeds(feeds);

    filterAlreadyExistingFeeds = (feeds) => {
        return this.feedService.fetchFeedsBySource(sourceNames.TWITTER).
            then(existingFeeds => existingFeeds.map(feed => Number(feed.feed_id))).
            then(existingFeedIds => feeds.filter(feed => !existingFeedIds.includes(feed.id)));
    }

    transformData = feeds => {
        return feeds.map(feed => {
            const feed_id = feed.id;
            delete feed.id;
            const page_link = feed.entities.urls[0]
                ? feed.entities.urls[0].expanded_url :
                null;
            return {
                author: feed.user.name,
                author_thumbnail: feed.user.profile_image_url_https,
                screen_name: feed.user.screen_name,
                likes: feed.favorite_count,
                description: feed.text,
                source: sourceNames.TWITTER,
                pub_date: feed.created_at,
                page_link,
                feed_id
            }
        });
    }
}