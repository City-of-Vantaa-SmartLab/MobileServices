import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import sources from './rss-feed-sources';
import { RssFeed } from './rss-feed.entity';
import { Repository, Transaction, TransactionRepository } from 'typeorm';

const Parser = require('rss-parser');
const parser = new Parser();


@Injectable()
export class RssFeedService {

    constructor(
        @InjectRepository(RssFeed)
        @TransactionRepository(RssFeed)
        private readonly rssFeedRepository: Repository<RssFeed>,
        private readonly logger: Logger) {
        this.logger = new Logger('RssFeedService');
    }

    async onModuleInit() {
        await this.fetchAndSaveRssFeeds();
    }

    @Transaction()
    async fetchAndSaveRssFeeds() {
        try {
            const [
                news,
                stories,
                aikuisopisto,
                nuorten,
                kaupunginmuseo,
                events] = await Promise.all([
                    parser.parseURL(sources.news),
                    parser.parseURL(sources.stories),
                    parser.parseURL(sources.aikuisopisto),
                    parser.parseURL(sources.nuorten),
                    parser.parseURL(sources.kaupunginmuseo),
                    parser.parseURL(sources.events)
                ]);
            await Promise.all([
                this.rssFeedRepository.save(news.items.map(item => { return { ...item, source: 'rss_news' } })),
                this.rssFeedRepository.save(stories.items.map(item => { return { ...item, source: 'rss_stories' } })),
                this.rssFeedRepository.save(aikuisopisto.items.map(item => { return { ...item, source: 'rss_aikuisopisto' } })),
                this.rssFeedRepository.save(nuorten.items.map(item => { return { ...item, source: 'rss_nuorten' } })),
                this.rssFeedRepository.save(kaupunginmuseo.items.map(item => { return { ...item, source: 'rss_kaupunginmuseo' } })),
                this.rssFeedRepository.save(events.items.map(item => { return { ...item, source: 'rss_events' } })),
            ]);
        } catch (error) {
            this.logger.error(`Error in fetching and saving Rss feed: ${error.message}`);
        }
    }

    async findAll(): Promise<RssFeed[]> {
        return await this.rssFeedRepository.find();
    }
}