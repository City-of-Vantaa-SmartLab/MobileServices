import { Module, Logger } from '@nestjs/common';
import { RssFeedService } from './rss-feed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RssFeed } from './rss-feed.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RssFeed])],
    providers: [RssFeedService, Logger],
    exports: [RssFeedService],
})
export class RssFeedModule { }
