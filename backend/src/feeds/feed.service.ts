import { Injectable, Logger } from '@nestjs/common';
import { Feed } from './feed.entity';
import { Repository, LessThan } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeedService {

    constructor(
        @InjectRepository(Feed)
        private readonly feedRepository: Repository<Feed>,
        private readonly logger: Logger) {
        this.logger = new Logger('FeedService');
    }

    async getFeeds(type: string, limit: number, feedId: number) {
        try {
            const feeds = type ?
                await this.getFeedsByType(type, limit)
                : (
                    feedId ?
                        await this.getMoreByDate(limit, feedId) :
                        await this.getAll(limit));
            return feeds.slice(0, limit);
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            throw error;
        }
    }

    async getAll(limit: number) {
        try {
            return await this.feedRepository.find(
                {
                    take: limit,
                    order: { pub_date: 'DESC' }
                })
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            throw error;
        }
    }

    async getMoreByDate(limit: number, feedId: number) {
        try {
            const feed = await this.feedRepository.findOne(feedId);
            return await this.feedRepository.find(
                {
                    where: { pub_date: LessThan(feed.pub_date) },
                    take: limit,
                    order: { pub_date: 'DESC' }
                })
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            throw error;
        }
    }

    async getFeedsByType(sourceTypes: string, limit: number) {
        try {
            return await this.feedRepository.find({ where: { source: In(sourceTypes.split(',')) }, take: limit })
        } catch (error) {
            this.logger.error(`Failed to get feeds for type: ${sourceTypes}: ${error}`);
            throw error;
        }
    }

    saveFeed(feed: Feed) {
        return this.feedRepository.save(feed);
    }

    saveFeeds(feeds: Feed[]) {
        return this.feedRepository.save(feeds);
    }
}