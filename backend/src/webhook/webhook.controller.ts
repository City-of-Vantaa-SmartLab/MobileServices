import {
    Controller,
    Get,
    Res,
    Logger,
    Req, Post,
} from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { FacebookFeedService } from '../facebook-feed/facebook-feed.service';
import { ConfigService } from '../config/config.service';
import { TwitterFeedService } from '../twitter-feed/twitter-feed.service';
const config = new ConfigService();
const crypto = require('crypto')

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
    async fbVerify(@Req() request, @Res() response) {
        try {
            this.logger.log('Facebook Verification challenge', request.query['hub.challenge']);
            const hubChallenge = parseInt(request.query['hub.challenge'], 10);
            this.logger.error(`Parsed hub challenge: ${hubChallenge}`);
            return response.status(200).json(hubChallenge);
        } catch (error) {
            return response.sendStatus(400);
        }
    }

    @Post('facebook')
    @ApiResponse({status: 200, description: 'Trigger facebook fetch'})
    fbTrigger(@Res() response) {
        this.facebookFeedService.fetchAndSaveFacebookFeeds();
        this.logger.log('Triggered facebook fetch');
        return response.sendStatus(200);
    }

    @Get('twitter')
    @ApiResponse({status: 200, description: 'Verification endpoint for twitter fetch'})
    async twVerify(@Res() response, @Req() request) {
        try {
            const SHA = 'sha256='
            const hmac = crypto.createHmac('sha256', config.twitterConsumerSecret);
            const encryptedCRC = SHA + hmac.update(request.query.crc_token).digest('base64')
            this.logger.log('Twitter CRC token: ', request.query.crc_token);
            this.logger.log('Encrypted CRC Token: ', encryptedCRC);
            return response.status(200).json({response_token: encryptedCRC});
        } catch (error) {
            this.logger.error(`Error while verifying twitter webhook:${error.message}`);
            return response.sendStatus(400);
        }
    }

    @Post('twitter')
    @ApiResponse({status: 200, description: 'Trigger Twitter'})
    twTrigger(@Res() response) {
        this.twitterFeedService.fetchAndSaveTwitterFeeds();
        this.logger.log('Triggered Twitter fetch');
        return response.sendStatus(200);
    }
}