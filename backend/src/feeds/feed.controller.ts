import {
    Controller,
    Get,
    Req,
    Res,
    Logger
} from '@nestjs/common';
import { FeedService } from './feed.service';
import { ConfigService } from '../config/config.service';
const config = new ConfigService();

@Controller('/api/feeds')
export class FeedController {

    constructor(
        private readonly feedService: FeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('FeedController');
    }

    @Get()
    async getFeeds(@Res() response, @Req() request) {
        try {
            const limit = request.query.limit || config.numberOfFeeds;
            const feeds = await this.feedService.getFeeds(request.query.type, limit);
            if (feeds) {
                return response.status(200).json(feeds);
            } else {
                return response.status(404).json(`Could not find any feeds in the system.`);
            }
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            return response.status(500).json(`Failed to get feeds: ${error.message}`);
        }
    }
}