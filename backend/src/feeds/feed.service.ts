import { Injectable, Logger } from '@nestjs/common';
import { Feed } from './feed.entity';
import { Repository, LessThan, In } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeedService {

    constructor(
        @InjectRepository(Feed)
        private readonly feedRepository: Repository<Feed>,
        private readonly logger: Logger) {
        this.logger = new Logger('FeedService');
    }

    async getFeeds(sourceTypes: string, limit: number, skip: number) {
        try {
            const feeds = sourceTypes ?
                await this.getMoreBySourceAndDate(sourceTypes, limit, skip)
                : await this.getMoreByDate(limit, skip)

            return feeds.slice(0, ((limit && limit <= feeds.length) ? limit : feeds.length));
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            throw error;
        }
    }

    async getAll(limit: number) {
        try {
            return await this.feedRepository.find(
                {
                    order: { pub_date: 'DESC' },
                    take: limit,
                })
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            throw error;
        }
    }

    async getMoreByDate(limit: number, skip: number) {
        try {
            if (!skip) {
                return this.getAll(limit);
            }
            const feed = await this.feedRepository.findOne(skip);
            return await this.feedRepository.find(
                {
                    where: {
                        pub_date: LessThan(feed.pub_date),
                    },
                    order: { pub_date: 'DESC' },
                    take: limit,
                });
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            throw error;
        }
    }

    async getMoreBySourceAndDate(sourceTypes: string, limit: number, skip: number) {
        try {
            if (!skip) {
                return await this.getFeedsBySource(sourceTypes, limit);
            }
            const feed = await this.feedRepository.findOne(skip);
            return await this.feedRepository.find(
                {
                    where: {
                        pub_date: LessThan(feed.pub_date),
                        source: In(sourceTypes.split(','))
                    },
                    order: { pub_date: 'DESC' },
                    take: limit,
                });
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            throw error;
        }
    }

    async getFeedsBySource(sourceTypes: string, limit: number) {
        try {
            return await this.feedRepository.find({
                where:
                    {
                        source: In(sourceTypes.split(','))
                    },
                order: { pub_date: 'DESC' },
                take: limit
            })
        } catch (error) {
            this.logger.error(`Failed to get feeds for type: ${sourceTypes}: ${error}`);
            throw error;
        }
    }

    fetchFeedsBySource(sourceType: string) {
        return this.feedRepository.find({
            where:
                {
                    source: sourceType,
                },
        });
    }

    fetchFeedsBySourceAndType(sourceType: string, type: string) {
        return this.feedRepository.find({
            where:
                {
                    source: sourceType,
                    type
                },
        });
    }

    saveFeed(feed: Feed) {
        return this.feedRepository.save(feed);
    }

    saveFeeds(feeds: Feed[]) {
        return this.feedRepository.save(feeds);
    }
}