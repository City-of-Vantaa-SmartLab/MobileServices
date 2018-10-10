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

    onModuleInit() {
        this.fetchAndSaveRssFeeds();
    }

    @Transaction()
    async fetchAndSaveRssFeeds() {
        this.logger.log('Fetching Rss feeds Started');

        parser.parseURL(sources.news)
            .then(this.addSourceName('vantaa'))
            .then(this.persistIntoDb)
            .catch(error => this.logger.error(`Failed to fetch Rss_News :${error}`)),
            parser.parseURL(sources.stories)
                .then(this.addSourceName('vantaa'))
                .then(this.persistIntoDb)
                .catch(error => this.logger.error(`Failed to fetch Rss_Stories :${error}`)),
            parser.parseURL(sources.aikuisopisto)
                .then(this.addSourceName('sivistysvantaa'))
                .then(this.persistIntoDb)
                .catch(error => this.logger.error(`Failed to fetch Rss_Aikuisopisto :${error}`)),
            parser.parseURL(sources.nuorten)
                .then(this.addSourceName('sivistysvantaa'))
                .then(this.persistIntoDb)
                .catch(error => this.logger.error(`Failed to fetch Rss_Nuorten :${error}`)),
            parser.parseURL(sources.kaupunginmuseo)
                .then(this.addSourceName('sivistysvantaa'))
                .then(this.persistIntoDb)
                .catch(error => this.logger.error(`Failed to fetch Rss_Kaupunginmuseo :${error}`)),

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