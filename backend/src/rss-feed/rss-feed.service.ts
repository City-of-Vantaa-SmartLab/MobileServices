import { Injectable, Logger } from '@nestjs/common';
import sources from './rss-feed-sources';
import { Transaction } from 'typeorm';
import * as converter from 'json-style-converter/es5';
import { FeedService } from '../feeds/feed.service';
const Parser = require('rss-parser');
const parser = new Parser();

@Injectable()
export class RssFeedService {

    constructor(
        private readonly feedService: FeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('RssFeedService');
    }

    async onModuleInit() {
        await this.fetchAndSaveRssFeeds();
    }

    @Transaction()
    async fetchAndSaveRssFeeds() {
        this.logger.log('Fetching Rss feeds Started');
        try {
            await Promise.all([
                parser.parseURL(sources.news).then(this.addSourceName('Rss_News')).then(this.persistIntoDb),
                parser.parseURL(sources.stories).then(this.addSourceName('Rss_Stories')).then(this.persistIntoDb),
                parser.parseURL(sources.aikuisopisto).then(this.addSourceName('Rss_Aikuisopisto')).then(this.persistIntoDb),
                parser.parseURL(sources.nuorten).then(this.addSourceName('Rss_Nuorten')).then(this.persistIntoDb),
                parser.parseURL(sources.kaupunginmuseo).then(this.addSourceName('Rss_Kaupunginmuseo')).then(this.persistIntoDb),
            ]);
        } catch (error) {
            this.logger.error(`Error in fetching and saving Rss feed: ${error.message}`);
        }
        this.logger.log('Fetching Rss feeds Completed');
    }

    persistIntoDb = data => this.feedService.saveFeeds(data.items);

    addSourceName = name => {
        return (data) => {
            data = converter.camelToSnakeCase(data);
            data.items = data.items.map(item => {
                return {
                    ...item,
                    source: name,
                    page_link: item.link,
                    description: item.content
                }
            });
            return data;
        }
    }
}