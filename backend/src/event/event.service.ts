import { Injectable, Logger } from '@nestjs/common';
import * as converter from 'json-style-converter/es5';
import sources from './event.sources';
import { FeedService } from '../feeds/feed.service';
import { sourceNames } from '../feeds/feed.sources';
import { ConfigService } from '../config/config.service';
const { formatToTimeZone } = require('date-fns-timezone');
const format = 'YYYY-MM-DD HH:mm:ss.SSS [GMT]Z (z)';
const Parser = require('rss-parser-browser');
const config = new ConfigService();

@Injectable()
export class EventFeedService {

    constructor(
        private readonly feedService: FeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('EventFeedService');
    }

    onModuleInit() {
        setInterval(() => {
            this.fetchAndSaveEventFeeds();
        }, config.updateInterval);
    }

    async fetchAndSaveEventFeeds() {
        this.logger.log('Fetching Event feeds Started');
        const options = {
            customFields: {
                item: [
                    ['eventz:startDate', 'startDate'],
                    ['eventz:endDate', 'endDate'],
                    ['eventz:itemTimeFormatted', 'eventTiming'],
                    ['eventz:image', 'imageUrl'],
                    ['content', 'description']
                ],
            }
        }
        try {
            Parser.parseURL(sources.events, options, (_, parsed) => {
                if (parsed && parsed.feed) {
                    this.filterAlreadyExistingFeeds(parsed.feed.entries)
                        .then(this.transformData)
                        .then(this.persistIntoDb)
                        .then(() => this.logger.log('Fetching Event feeds Completed'))
                        .catch(error => this.logger.error(`Failed to get event feeds: ${error}`))
                }
            });
        } catch (error) {
            this.logger.error(`failed to get events feeds: ${error.message}`);
        }
    }

    persistIntoDb = events => this.feedService.saveFeeds(events);

    filterAlreadyExistingFeeds = (events) => {
        return this.feedService.fetchFeedsBySource(sourceNames.EVENTS)
            .then(existingEvents => existingEvents.map(event => {
                return formatToTimeZone(event.pub_date, format, { timeZone: 'Europe/Helsinki' })
            }))
            .then(dates => events.filter(event => {
                const itemDate = formatToTimeZone(event.pubDate, format, { timeZone: 'Europe/Helsinki' });
                return !dates.includes(itemDate)
            }))
    }

    transformData = feeds => {
        feeds = converter.camelToSnakeCase(feeds);
        return feeds.map(feed => ({
            ...feed,
            description: feed.content,
            page_link: feed.link,
            source: sourceNames.EVENTS,
        }));
    }
}