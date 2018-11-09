import { Module, Logger } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { FacebookFeedModule } from '../facebook-feed/facebook-feed.module';
import { TwitterFeedModule } from '../twitter-feed/twitter-feed.module';
import {YouTubeFeedModule} from "../youtube-feed/youtube-feed.module";

@Module({
    controllers: [WebhookController],
    providers: [Logger],
    imports: [FacebookFeedModule, TwitterFeedModule, YouTubeFeedModule],
})
export class WebhookModule { }
