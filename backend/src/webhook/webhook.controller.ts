import {
    Controller,
    Get,
    Res,
    Logger,
    Req, Post,
} from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import {FacebookFeedService} from '../facebook-feed/facebook-feed.service';
import {ConfigService} from '../config/config.service';
import {TwitterFeedService} from '../twitter-feed/twitter-feed.service';
const config = new ConfigService();
@ApiUseTags('webhook')
@Controller('/api/webhook')
export class WebhookController {
    constructor(
        private readonly facebookFeedService: FacebookFeedService,
        private readonly twitterFeedService: TwitterFeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('WebhookController');
    }

    @Get('facebook')
    @ApiResponse({status: 200, description: 'Verification endpoint for facebook fetch'})
    fbVerify(@Req() request, @Res() response) {
        try {
            this.logger.log(request.query['hub.challenge']);
            const hubChallenge = parseInt(request.query['hub.challenge'], 10);
            this.logger.log(hubChallenge);
            return response.status(200).json(hubChallenge);
        } catch (error) {
            return response.status(400).json('');
        }
    }

    @Post('facebook')
    @ApiResponse({status: 200, description: 'Trigger facebook fetch'})
    async fbTrigger(@Res() response) {
        this.facebookFeedService.fetchAndSaveFacebookFeeds();
        this.logger.log('Triggered facebook fetch');
        return response.status(200).json();
    }

    @Get('twitter')
    @ApiResponse({status: 200, description: 'Verification endpoint for twitter fetch'})
    async twVerify(@Res() response, @Req() request) {
        try {

            const crypto = require('crypto');
            const hmac = 'sha256=' + crypto.createHmac('sha256', config.twitterConsumerSecret).update(request.query.crc_token).digest('base64');
            this.logger.log(request.query.crc_token);
            this.logger.log(hmac);
            return response.status(200).json({response_token: hmac});
        } catch (error) {
            this.logger.error(`Error while verifying twitter webhook:${error.message}`);
            return response.status(400).json('');
        }
    }

    @Post('twitter')
    @ApiResponse({status: 200, description: 'Trigger Twitter'})
    async twTrigger(@Res() response) {
        this.twitterFeedService.fetchAndSaveTwitterFeeds();
        this.logger.log('Triggered Twitter fetch');
        return response.status(200).json();
    }
}