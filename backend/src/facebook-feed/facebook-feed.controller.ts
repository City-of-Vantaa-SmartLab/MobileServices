import {
    Controller,
    Get,
    Res,
    Logger
} from '@nestjs/common';
import { FacebookFeedService } from './facebook-feed.service';
import { FacebookFeed } from './facebook-feed.entity';

@Controller('/api/facebook-feeds')
export class FacebookFeedController {

    constructor(
        private readonly facebookFeedService: FacebookFeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('FacebookFeedController');
    }

    @Get()
    async findAll(@Res() response): Promise<FacebookFeed[]> {
        try {
            const facebookFeeds = await this.facebookFeedService.findAll();
            if (facebookFeeds) {
                return response.status(200).json(facebookFeeds);
            } else {
                return response.status(404).json(`Could not find any facebook feeds in the system.`);
            }
        } catch (error) {
            this.logger.error(`Failed to get facebook feeds: ${error}`);
            return response.status(500).json(`Failed to get facebook feeds: ${error.message}`);
        }
    }
}