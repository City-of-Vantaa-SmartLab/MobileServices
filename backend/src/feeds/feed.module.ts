import { Module, Logger } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { FacebookFeedModule } from '../facebook-feed/facebook-feed.module';
import { YouTubeFeedModule } from '../youtube-feed/youtube-feed.module';
import { RssFeedModule } from '../rss-feed/rss-feed.module';

@Module({
    controllers: [FeedController],
    imports: [FacebookFeedModule, YouTubeFeedModule, RssFeedModule],
    providers: [FeedService, Logger],
    exports: [FeedService],
})
export class FeedModule { }
