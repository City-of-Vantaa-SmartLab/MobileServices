import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import sources from './rss-feed-sources';
import { RssFeed } from './rss-feed.entity';
import { Repository, Transaction, TransactionRepository } from 'typeorm';
import * as converter from 'json-style-converter/es5';
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
            await Promise.all([
                parser.parseURL(sources.news).then(this.addSourceName('rss_news')).then(this.persistIntoDb),
                parser.parseURL(sources.stories).then(this.addSourceName('rss_stories')).then(this.persistIntoDb),
                parser.parseURL(sources.aikuisopisto).then(this.addSourceName('rss_aikuisopisto')).then(this.persistIntoDb),
                parser.parseURL(sources.nuorten).then(this.addSourceName('rss_nuorten')).then(this.persistIntoDb),
                parser.parseURL(sources.kaupunginmuseo).then(this.addSourceName('rss_kaupunginmuseo')).then(this.persistIntoDb),
                parser.parseURL(sources.events).then(this.addSourceName('rss_events')).then(this.persistIntoDb)
            ]);
        } catch (error) {
            this.logger.error(`Error in fetching and saving Rss feed: ${error.message}`);
        }
    }

    persistIntoDb = data => this.rssFeedRepository.save(data.items);

    addSourceName = name => {
        return (data) => {
            data = converter.camelToSnakeCase(data);
            data.items.map(item => item.source = name);
            data.source = name;
            return data;
        }
    }

    async find(limit: number): Promise<RssFeed[]> {
        return await this.rssFeedRepository.find({
            order: {
                pub_date: 'DESC'
            },
            take: limit
        });
    }
}