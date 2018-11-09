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
import { YouTubeFeedService } from '../youtube-feed/youtube-feed.service';
const config = new ConfigService();
const crypto = require('crypto');
const SHA = 'sha256=';

@ApiUseTags('webhook')
@Controller('/api/webhook')
export class WebhookController {
    constructor(
        private readonly facebookFeedService: FacebookFeedService,
        private readonly twitterFeedService: TwitterFeedService,
        private readonly youtubeFeedService: YouTubeFeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('WebhookController');
    }

    @Get('facebook')
    fbVerify(@Res() response, @Req() request) {
        try {
            this.logger.log(`Facebook Verification challenge: ${request.query['hub.challenge']}`);
            const hubChallenge = parseInt(request.query['hub.challenge'], 10);
            this.logger.log(`Parsed hub challenge: ${hubChallenge}`);
            return response.status(200).json(hubChallenge);
        } catch (error) {
            return response.sendStatus(400);
        }
    }

    @Post('facebook')
    fbTrigger(@Res() response) {
        this.facebookFeedService.fetchAndSaveFacebookFeeds();
        this.logger.log('Triggered facebook fetch');
        return response.sendStatus(200);
    }

    @Get('twitter')
    twVerify(@Res() response, @Req() request) {
        try {
            this.logger.log(`Twitter Verification token: ${request.query.crc_token}`);
            const hmac = crypto.createHmac('sha256', config.twitterConsumerSecret);
            const encryptedCRC = SHA + hmac.update(request.query.crc_token).digest('base64');
            this.logger.log(`Encrypted CRC Token:  ${encryptedCRC}`);
            return response.status(200).json({response_token: encryptedCRC});
        } catch (error) {
            this.logger.error(`Error while verifying twitter webhook:${error.message}`);
            return response.sendStatus(400);
        }
    }

    @Post('twitter')
    twTrigger(@Res() response) {
        this.twitterFeedService.fetchAndSaveTwitterFeeds();
        this.logger.log('Triggered Twitter fetch');
        return response.sendStatus(200);
    }

    @Get('youtube')
    youtubeVerify(@Req() request) {
        this.logger.log(`Youtube Verification challenge: ${request.query['hub.challenge']}`);
        return request.query['hub.challenge'];
    }

    @Post('youtube')
    youtubeTrigger(@Res() response) {
        this.youtubeFeedService.fetchAndSaveYouTubeFeed();
        this.logger.log('Triggered Youtube fetch');
        return response.sendStatus(200);
    }
}