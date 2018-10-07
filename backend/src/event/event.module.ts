import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feed } from '../feeds/feed.entity';
import { EventFeedService } from './event.service';
import { FeedService } from '../feeds/feed.service';

@Module({
    imports: [TypeOrmModule.forFeature([Feed])],
    providers: [EventFeedService, FeedService, Logger],
    exports: [EventFeedService],
})
export class EventModule { }