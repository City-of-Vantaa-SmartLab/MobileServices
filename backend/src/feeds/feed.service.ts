import { Injectable, Logger } from '@nestjs/common';
import { Feed } from './feed.entity';
import { Repository, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FeedService {

    constructor(
        @InjectRepository(Feed)
        private readonly feedRepository: Repository<Feed>,
        private readonly logger: Logger) {
        this.logger = new Logger('FeedService');
    }

    async getFeeds(sourceTypes: string, limit: number, skip: number, language: string) {
        try {
            language = language.toUpperCase();
            const feeds = sourceTypes ?
                await this.getMoreBySourceAndDate(sourceTypes, limit, skip, language)
                : await this.getMoreByDate(limit, skip, language)

            return feeds.slice(0, ((limit && limit <= feeds.length) ? limit : feeds.length));
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            throw error;
        }
    }

    async getAll(limit: number, language: string) {
        try {
            return await getRepository(Feed)
                .createQueryBuilder("feed")
                .where(this.getQueryStringBasedOnLanguage(),
                    { lang: language, vantaa: 'vantaa' })
                .orderBy("feed.pub_date", "DESC")
                .take(limit)
                .getMany();
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            throw error;
        }
    }

    async getMoreByDate(limit: number, skip: number, language: string) {
        try {
            if (!skip) {
                return this.getAll(limit, language);
            }
            const feed = await this.feedRepository.findOne(skip);
            return await getRepository(Feed)
                .createQueryBuilder("feed")
                .where("feed.pub_date < :date " +
                    " AND " + this.getQueryStringBasedOnLanguage(),
                    { date: feed.pub_date, lang: language, vantaa: 'vantaa' })
                .orderBy("feed.pub_date", "DESC")
                .take(limit)
                .getMany();
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            throw error;
        }
    }

    async getMoreBySourceAndDate(sourceTypes: string, limit: number, skip: number, language: string) {
        try {
            if (!skip) {
                return await this.getFeedsBySource(sourceTypes, limit, language);
            }
            const feed = await this.feedRepository.findOne(skip);
            return await getRepository(Feed)
                .createQueryBuilder("feed")
                .where("feed.pub_date < :date AND " + this.getQueryStringBasedOnSource(sourceTypes.toLowerCase().split(',')),
                    {
                        date: feed.pub_date,
                        lang: language,
                        sourceTypes: "'" + sourceTypes.toLowerCase().split(',').join("','") + "'",
                        vantaa: 'vantaa',
                    })
                .orderBy("feed.pub_date", "DESC")
                .take(limit)
                .getMany();
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            throw error;
        }
    }

    async getFeedsBySource(sourceTypes: string, limit: number, language: string) {
        try {

            return await getRepository(Feed)
                .createQueryBuilder("feed")
                .where(this.getQueryStringBasedOnSource(sourceTypes.toLowerCase().split(',')),
                    {
                        lang: language,
                        vantaa: 'vantaa',
                        sourceTypes: "'" + sourceTypes.toLowerCase().split(',').join("','") + "'",
                    })
                .orderBy("feed.pub_date", "DESC")
                .take(limit)
                .getMany();
        } catch (error) {
            this.logger.error(`Failed to get feeds for type: ${sourceTypes}: ${error}`);
            throw error;
        }
    }

    getQueryStringBasedOnSource = (sourceTypes: string[]) => {
        const sources = "'" + sourceTypes.join("','") + "'";
        if (sourceTypes.includes('vantaa')) {
            return "((feed.source = :vantaa AND feed.language = :lang) OR (feed.language = 'FI' AND feed.source IN (" + sources + ")))"
        } else {
            return "feed.source IN (" + sources + ")";
        }
    }

    getQueryStringBasedOnLanguage = () => {
        return "((feed.source = :vantaa AND feed.language = :lang) OR (feed.language = 'FI'))";
    }

    fetchFeedsBySource(sourceType: string) {
        return this.feedRepository.find({
            where:
                {
                    source: sourceType.toLowerCase(),
                },
        });
    }

    fetchFeedsBySourceAndType(sourceType: string, type: string) {
        return this.feedRepository.find({
            where:
                {
                    source: sourceType.toLowerCase(),
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