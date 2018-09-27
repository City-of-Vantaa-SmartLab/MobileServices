import {
    Controller,
    Get,
    Res,
    Logger
} from '@nestjs/common';
import { YouTubeFeedService } from './youtube-feed.service';
import { YouTubeFeed } from './youtube-feed.entity';

@Controller('/api/you-tube-feeds')
export class YouTubeFeedController {

    constructor(
        private readonly youTubeFeedService: YouTubeFeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('YouTubeFeedController');
    }

    @Get()
    async findAll(@Res() response): Promise<YouTubeFeed[]> {
        try {
            const youTubeFeeds = await this.youTubeFeedService.findAll();
            if (youTubeFeeds) {
                return response.status(200).json(youTubeFeeds);
            } else {
                return response.status(404).json(`Could not find any youtube feeds in the system.`);
            }
        } catch (error) {
            this.logger.error(`Failed to get youtube feeds: ${error}`);
            return response.status(500).json(`Failed to get youtube feeds: ${error.message}`);
        }
    }
}