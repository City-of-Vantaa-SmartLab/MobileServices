import { Injectable, Logger } from '@nestjs/common';
import sources from './rss-feed-sources';
import { Transaction } from 'typeorm';
import * as converter from 'json-style-converter/es5';
import { FeedService } from '../feeds/feed.service';
import { sourceNames, sourceTypes } from '../feeds/feed.sources';
import { ConfigService } from '../config/config.service';
const { formatToTimeZone } = require('date-fns-timezone');
const format = 'YYYY-MM-DD HH:mm:ss.SSS [GMT]Z (z)';
const Parser = require('rss-parser');
const parser = new Parser();
const config = new ConfigService();

@Injectable()
export class RssFeedService {

    constructor(
        private readonly feedService: FeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('RssFeedService');
    }

    onModuleInit() {
        setInterval(() => {
            this.fetchAndSaveRssFeeds();
        }, config.updateInterval);
    }

    @Transaction()
    async fetchAndSaveRssFeeds() {
        this.logger.log('Fetching Rss feeds Started');

        parser.parseURL(sources.news)
            .then(this.addSourceAndType(sourceNames.VANTAA, sourceTypes.NEWS))
            .then(this.persistIntoDb)
            .catch(error => this.logger.error(`Failed to fetch Rss_News :${error}`)),
            parser.parseURL(sources.stories)
                .then(this.addSourceAndType(sourceNames.VANTAA, sourceTypes.STORIES))
                .then(this.persistIntoDb)
                .catch(error => this.logger.error(`Failed to fetch Rss_Stories :${error}`)),
            parser.parseURL(sources.aikuisopisto)
                .then(this.addSourceAndType(sourceNames.SIVISTYSVANTAA, sourceTypes.AIKUISOPISTO))
                .then(this.persistIntoDb)
                .catch(error => this.logger.error(`Failed to fetch Rss_Aikuisopisto :${error}`)),
            parser.parseURL(sources.nuorten)
                .then(this.addSourceAndType(sourceNames.SIVISTYSVANTAA, sourceTypes.NUORTEN))
                .then(this.persistIntoDb)
                .catch(error => this.logger.error(`Failed to fetch Rss_Nuorten :${error}`)),
            parser.parseURL(sources.kaupunginmuseo)
                .then(this.addSourceAndType(sourceNames.SIVISTYSVANTAA, sourceTypes.KAUPUNGINMUSEO))
                .then(this.persistIntoDb)
                .catch(error => this.logger.error(`Failed to fetch Rss_Kaupunginmuseo :${error}`)),
            this.logger.log('Fetching Rss feeds Completed');
    }

    persistIntoDb = data => this.feedService.saveFeeds(data.items);

    addSourceAndType = (name, type) => {
        return (data) => {
            data = converter.camelToSnakeCase(data);
            data.items = data.items.map(item => {
                return {
                    ...item,
                    source: name,
                    type,
                    page_link: item.link,
                    description: item.content,
                };
            });
            return data;
        };
    }
}