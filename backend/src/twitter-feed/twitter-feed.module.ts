import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feed } from '../feeds/feed.entity';
import { TwitterFeedService } from './twitter-feed.service';
import { FeedService } from '../feeds/feed.service';

@Module({
    imports: [TypeOrmModule.forFeature([Feed])],
    providers: [TwitterFeedService, FeedService, Logger],
    exports: [TwitterFeedService]
})
export class TwitterFeedModule { }
