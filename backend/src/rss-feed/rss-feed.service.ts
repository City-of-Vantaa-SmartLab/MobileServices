import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import sources from './rss-feed-sources';
import { RssFeed } from './rss-feed.entity';
import { Repository } from 'typeorm';
const Parser = require('rss-parser');
const parser = new Parser();


@Injectable()
export class RssFeedService {

    constructor(
        @InjectRepository(RssFeed)
        private readonly rssFeedRepository: Repository<RssFeed>,
        private readonly logger: Logger) {
        this.logger = new Logger('RssFeedService');
    }

    async onModuleInit() {
        await this.fetchAndSaveRssFeeds();
    }

    async fetchAndSaveRssFeeds() {
        try {
            const [news, stories] = await Promise.all([parser.parseURL(sources.news), parser.parseURL(sources.stories)]);
            await Promise.all([this.rssFeedRepository.save(news.items), this.rssFeedRepository.save(stories.items)]);
        } catch (error) {
            this.logger.error(`Error in fetching and saving Rss feed: ${error.message}`);
        }
    }

    async findAll(): Promise<RssFeed[]> {
        return await this.rssFeedRepository.find();
    }
}