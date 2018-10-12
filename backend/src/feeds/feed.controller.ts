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
        description: `source type of the feed to be fetched. If Empty/null returns all feeds.`
            + `supported values are`
            + `1. vantaa`
            + `2. sivistysvantaa`
            + `3. events`
            + `4. Facebook`
            + `5. Youtube`,
        type: String,
    })
    @ApiImplicitQuery({
        name: 'limit',
        required: false,
        description: 'Number of feeds to be returned in the response.If Empty/Null uses the defatult limit from configuration file.',
        type: Number,
    })
    @ApiImplicitQuery({
        name: 'skip',
        required: false,
        description: 'Number of feeds to be skipped while fetching more data based on pagination.',
        type: Number,
    })
    @ApiResponse({ status: 200, description: 'List of feeds as response.' })
    @ApiResponse({ status: 500, description: 'Server error.' })
    async getFeeds(@Res() response, @Req() request) {
        try {
            const limit = request.query.limit || config.numberOfFeeds;
            const skip = request.query.skip;
            const feeds = await this.feedService.getFeeds(request.query.type, limit, skip);
            return response.status(200).json(feeds);
        } catch (error) {
            this.logger.error(`Failed to get feeds: ${error}`);
            return response.status(500).json(`Failed to get feeds: ${error.message}`);
        }
    }
}