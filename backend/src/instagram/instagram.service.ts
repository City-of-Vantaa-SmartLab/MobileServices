
import { ConfigService } from '../config/config.service';
import { Injectable, Logger } from '@nestjs/common';
import Instagram from 'node-instagram';
import { FeedService } from '../feeds/feed.service';
import { sourceNames } from '../feeds/feed.sources';
const { formatToTimeZone } = require('date-fns-timezone');
const format = 'YYYY-MM-DD HH:mm:ss.SSS [GMT]Z (z)';
const config = new ConfigService();

const instagram = new Instagram({
    clientId: config.instagramClientId,
    clientSecret: config.instagramClientSecret,
    accessToken: config.instagramAccessToken,
});

@Injectable()
export class InstagramFeedService {

    constructor(
        private readonly feedService: FeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('InstagramFeedService');
    }

    onModuleInit() {
        this.fetchAndSaveYouTubeFeed();
        setInterval(() => {
            this.fetchAndSaveYouTubeFeed();
        }, config.socialMediaUpdateInterval);
    }

    async fetchAndSaveYouTubeFeed() {
        this.logger.log('Fetching Instagram feeds Started');
        await instagram.get('users/self/media/recent')
            .then(this.filterAlreadyExistingFeeds)
            .then(this.formatFeed)
            .then(this.persistIntoDb)
            .then(() =>
                this.logger.log('Fetch and save for Instagram feeds Completed'))
            .catch(error =>
                this.logger.error(`Error in fetching and saving Instagram feed: ${error}`));
    }

    persistIntoDb = feeds => this.feedService.saveFeeds(feeds);

    formatFeed = (instagramFeeds) => {
        return instagramFeeds.map(item => {
            return {
                author: item.user.full_name,
                author_thumbnail: item.user.profile_picture,
                pub_date: formatToTimeZone(Number(item.created_time + '000'), format, { timeZone: 'Europe/Helsinki' }),
                source: sourceNames.INSTAGRAM,
                description: item.caption.text,
                image_url: item.images.standard_resolution ? item.images.standard_resolution.url : null,
                title: item.caption ? item.caption.text : null,
                likes: item.likes.count ? item.likes.count : 0,
                feed_id: item.id,
                page_link: item.link,
                type: item.type
            }
        });
    }

    filterAlreadyExistingFeeds = (feeds) => {
        return this.feedService.fetchFeedsBySource(sourceNames.INSTAGRAM).
            then(existingFeeds => existingFeeds.map(feed => feed.feed_id)).
            then(existingFeedIds => feeds.data.filter(feed => !existingFeedIds.includes(feed.id)));
    }
}