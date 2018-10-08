import {
    Controller,
    Get,
    Req,
    Res,
    Logger
} from '@nestjs/common';
import { FeedService } from './feed.service';
import { ConfigService } from '../config/config.service';
import { ApiUseTags, ApiImplicitQuery, ApiResponse } from '@nestjs/swagger';
const config = new ConfigService();

@ApiUseTags('feeds')
@Controller('/api/feeds')
export class FeedController {

    constructor(
        private readonly feedService: FeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('FeedController');
    }

    @Get()
    @ApiImplicitQuery({
        name: 'type',
        required: false,
        description: 'source type of the feed to be fetched. If Empty/null returns all feeds.',
        type: Number,
    })
    @ApiImplicitQuery({
        name: 'limit',
        required: false,
        description: 'Number of feeds to be returned in the response.If Empty/Null uses the defatult limit from configuration file.',
        type: Number,
    })
    @ApiResponse({ status: 200, description: 'List of feeds as response.' })
    @ApiResponse({ status: 500, description: 'Server error.' })
    async getFeeds(@Res() response, @Req() request) {
        try {
            const limit = request.query.limit || config.numberOfFeeds;
            const feeds = await this.feedService.getFeeds(request.query.type, limit);
            return response.status(200).json(feeds);
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            return response.status(500).json(`Failed to get feeds: ${error.message}`);
        }
    }
}