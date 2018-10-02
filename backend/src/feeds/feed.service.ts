import { Injectable, Logger } from '@nestjs/common';
import { RssFeedService } from '../rss-feed/rss-feed.service';
import { YouTubeFeedService } from '../youtube-feed/youtube-feed.service';
import { FacebookFeedService } from '../facebook-feed/facebook-feed.service';
import { compareDesc } from 'date-fns';

@Injectable()
export class FeedService {

    constructor(
        private readonly rssFeedService: RssFeedService,
        private readonly youTubeService: YouTubeFeedService,
        private readonly facebookService: FacebookFeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('FeedService');
    }

    async getFeeds(type: string, limit: number) {
        try {
            let feeds = [];
            type ? await this.getFeedsByType(type, limit).then(data => feeds.push(...data)) :
                await Promise.all([
                    this.getFacebookFeeds(limit).then(facebookFeeds => feeds.push(...facebookFeeds)),
                    this.getRssFeeds(limit).then(rssFeeds => feeds.push(...rssFeeds)),
                    this.getYouTubeFeeds(limit).then(youTubeFeeds => feeds.push(...youTubeFeeds))
                ]);
            return feeds.sort((a, b) => compareDesc(a.pub_date, b.pub_date)).slice(0, limit);
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`)
        }
    }

    async getFeedsByType(type: string, limit: number) {
        try {
            switch (type) {
                case 'facebook':
                    return await this.getFacebookFeeds(limit);
                case 'youtube':
                    return await this.getYouTubeFeeds(limit);
                case 'rss-feeds':
                    return await this.getRssFeeds(limit);
            }
        } catch (error) {
            this.logger.error(`Failed to get feeds for type: ${type}: ${error}`)
        }
    }

    async getFacebookFeeds(limit: number) {
        return await this.facebookService.find(limit);
    }

    async getYouTubeFeeds(limit: number) {
        return await this.youTubeService.find(limit);
    }

    async getRssFeeds(limit: number) {
        return await this.rssFeedService.find(limit);
    }
}