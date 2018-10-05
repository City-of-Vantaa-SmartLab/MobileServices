import { Injectable, Logger } from '@nestjs/common';
import * as converter from 'json-style-converter/es5';
import sources from './event.sources';
import { FeedService } from '../feeds/feed.service';
const Parser = require('rss-parser-browser');

@Injectable()
export class EventFeedService {

    constructor(
        private readonly feedService: FeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('EventFeedService');
    }

    onModuleInit() {
        this.fetchEventFeeds();
    }

    async fetchEventFeeds() {
        this.logger.log('Fetching Event feeds Started');
        try {
            var options = {
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
            Parser.parseURL(sources.events, options, (err, parsed) => {
                for (let entry of parsed.feed.entries) {
                    const eventFeed = this.transformData(entry);
                    this.feedService.saveFeed(eventFeed);
                }
            });
        } catch (error) {
            this.logger.error(`Failed to get event feeds: ${error}`)
        }
        this.logger.log('Fetching Event feeds Completed');
    }

    transformData = feed => {
        feed = converter.camelToSnakeCase(feed);
        return {
            ...feed,
            description: feed.content,
            page_link: feed.link,
            source: 'Rss_Events',
        }
    }
}