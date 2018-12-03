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
import { parse } from 'node-html-parser';

@Injectable()
export class RssFeedService {

    constructor(
        private readonly feedService: FeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('RssFeedService');
    }

    onModuleInit() {
        this.fetchAndSaveRssFeeds();
        setInterval(() => {
            this.fetchAndSaveRssFeeds();
        }, config.updateInterval);
    }

    @Transaction()
    async fetchAndSaveRssFeeds() {
        this.logger.log('Fetching Rss feeds Started');

        parser.parseURL(sources.news)
            .then(this.addSourceAndType(sourceNames.VANTAA, sourceTypes.NEWS))
            .then(feeds => this.filterAlreadyExistingFeeds(feeds, sourceNames.VANTAA, sourceTypes.NEWS))
            .then(this.persistIntoDb)
            .catch(error => this.logger.error(`Failed to fetch Rss_News :${error}`));
        parser.parseURL(sources.news_en)
            .then(this.addSourceAndType(sourceNames.VANTAA, sourceTypes.NEWS_EN))
            .then(feeds => this.filterAlreadyExistingFeeds(feeds, sourceNames.VANTAA, sourceTypes.NEWS_EN))
            .then(this.persistIntoDb)
            .catch(error => this.logger.error(`Failed to fetch Rss_News_EN :${error}`));
        parser.parseURL(sources.news_sv)
            .then(this.addSourceAndType(sourceNames.VANTAA, sourceTypes.NEWS_SV))
            .then(feeds => this.filterAlreadyExistingFeeds(feeds, sourceNames.VANTAA, sourceTypes.NEWS_SV))
            .then(this.persistIntoDb)
            .catch(error => this.logger.error(`Failed to fetch Rss_News_SV :${error}`));
        parser.parseURL(sources.stories)
            .then(this.addSourceAndType(sourceNames.VANTAA, sourceTypes.STORIES))
            .then(feeds => this.filterAlreadyExistingFeeds(feeds, sourceNames.VANTAA, sourceTypes.STORIES))
            .then(this.persistIntoDb)
            .catch(error => this.logger.error(`Failed to fetch Rss_Stories :${error}`));
        parser.parseURL(sources.aikuisopisto)
            .then(this.addSourceAndType(sourceNames.SIVISTYSVANTAA, sourceTypes.AIKUISOPISTO))
            .then(feeds => this.filterAlreadyExistingFeeds(feeds, sourceNames.SIVISTYSVANTAA, sourceTypes.AIKUISOPISTO))
            .then(this.persistIntoDb)
            .catch(error => this.logger.error(`Failed to fetch Rss_Aikuisopisto :${error}`));
        parser.parseURL(sources.nuorten)
            .then(this.addSourceAndType(sourceNames.SIVISTYSVANTAA, sourceTypes.NUORTEN))
            .then(feeds => this.filterAlreadyExistingFeeds(feeds, sourceNames.SIVISTYSVANTAA, sourceTypes.NUORTEN))
            .then(this.persistIntoDb)
            .catch(error => this.logger.error(`Failed to fetch Rss_Nuorten :${error}`));
        parser.parseURL(sources.kaupunginmuseo)
            .then(this.addSourceAndType(sourceNames.SIVISTYSVANTAA, sourceTypes.KAUPUNGINMUSEO))
            .then(feeds => this.filterAlreadyExistingFeeds(feeds, sourceNames.SIVISTYSVANTAA, sourceTypes.KAUPUNGINMUSEO))
            .then(this.persistIntoDb)
            .catch(error => this.logger.error(`Failed to fetch Rss_Kaupunginmuseo :${error}`));
        this.logger.log('Fetching Rss feeds Completed');
    }

    persistIntoDb = data => this.feedService.saveFeeds(data.items);

    filterAlreadyExistingFeeds = (data, name, type) => {
        return this.feedService.fetchFeedsBySourceAndType(name, type).
            then(existingFeeds => existingFeeds.map(feed => {
                return formatToTimeZone(feed.pub_date, format, { timeZone: 'Europe/Helsinki' })
            }))
            .then(dates => {
                data.items = data.items.filter(item => {
                    const itemDate = formatToTimeZone(item.pub_date, format, { timeZone: 'Europe/Helsinki' });
                    return !dates.includes(itemDate)
                })
                return data;
            })
    }

    addSourceAndType = (name, type) => {
        return (data) => {
            data = converter.camelToSnakeCase(data);
            data.items = data.items.map(item => {
                let description = item.content;
                let detailed_description = null;
                let image = null;

                // For news and stories content is returned in html format.
                // We need to parse the main descriptionsourceTypes and images from the text.
                if ([sourceTypes.NEWS,
                sourceTypes.STORIES,
                sourceTypes.NEWS_EN,
                sourceTypes.NEWS_SV].includes(type)) {
                    const root = parse(item.content);
                    detailed_description = root.childNodes[1]
                        ? (root.childNodes[1].rawText ? root.childNodes[1].rawText.replace(/[\t\r]/g, ' ') : null)
                        : null;
                    description = root.querySelector('p')
                        ? (root.querySelector('p').rawText ? root.querySelector('p').rawText.replace(/[\t\r\n]/g, '') : null)
                        : null;
                    image = root.querySelector('.imagewrapper');
                    const imageNode = image
                        ? config.vantaaImagePrefix + image.childNodes[0]
                            .rawAttrs.split(" ")[0]
                            .split("src=")[1] : null;
                    image = imageNode ? imageNode.replace(/"/g, "") : null;
                }

                const language = type === sourceTypes.NEWS_EN
                    ? 'EN'
                    : (type === sourceTypes.NEWS_SV ? 'SV' : 'FI')
                return {
                    ...item,
                    source: name,
                    type,
                    page_link: item.link,
                    description,
                    detailed_description,
                    image_url: image,
                    language
                }
            });
            return data;
        }
    }
}