import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feed } from '../feeds/feed.entity';
import { FacebookFeedService } from './facebook-feed.service';
import { FeedService } from '../feeds/feed.service';

@Module({
    imports: [TypeOrmModule.forFeature([Feed])],
    providers: [FacebookFeedService, FeedService, Logger],
    exports: [FacebookFeedService]
})
export class FacebookFeedModule { }
