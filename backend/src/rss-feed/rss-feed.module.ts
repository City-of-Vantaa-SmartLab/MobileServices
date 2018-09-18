import { Module, Logger } from '@nestjs/common';
import { RssFeedService } from './rss-feed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RssFeed } from './rss-feed.entity';
import { RssFeedController } from './rss-feed.controller';

@Module({
    controllers: [RssFeedController],
    imports: [TypeOrmModule.forFeature([RssFeed])],
    providers: [RssFeedService, Logger],
    exports: [RssFeedService],
})
export class RssFeedModule { }
