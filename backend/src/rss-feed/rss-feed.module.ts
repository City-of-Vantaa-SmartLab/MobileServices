import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedService } from '../feeds/feed.service';
import { Feed } from '../feeds/feed.entity';
import { RssFeedService } from './rss-feed.service';

@Module({
    imports: [TypeOrmModule.forFeature([Feed])],
    providers: [RssFeedService, FeedService, Logger],
    exports: [RssFeedService],
})
export class RssFeedModule { }
