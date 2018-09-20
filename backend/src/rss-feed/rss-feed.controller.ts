import {
    Controller,
    Get,
    Res,
    Logger
} from '@nestjs/common';
import { RssFeed } from './rss-feed.entity';
import { RssFeedService } from './rss-feed.service';

@Controller('/api/rss-feeds')
export class RssFeedController {

    constructor(
        private readonly rssFeedService: RssFeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('RssFeedController');
    }

    @Get()
    async findAll(@Res() response): Promise<RssFeed[]> {
        try {
            const rssFeeds = await this.rssFeedService.findAll();
            if (rssFeeds) {
                return response.status(200).json(rssFeeds);
            } else {
                return response.status(404).json(`Could not find any rss feeds in the system.`);
            }
        } catch (error) {
            this.logger.error(`Failed to get rss feeds: ${error}`);
            return response.status(500).json(`Failed to get rss feeds: ${error.message}`);
        }
    }
}