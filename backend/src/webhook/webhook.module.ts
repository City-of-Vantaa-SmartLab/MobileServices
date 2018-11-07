import { Module, Logger } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { FacebookFeedModule } from '../facebook-feed/facebook-feed.module';
import { TwitterFeedModule } from '../twitter-feed/twitter-feed.module';

@Module({
    controllers: [WebhookController],
    providers: [Logger],
    imports: [FacebookFeedModule, TwitterFeedModule],
})
export class WebhookModule { }
