import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feed } from '../feeds/feed.entity';
import { FeedService } from '../feeds/feed.service';
import { YouTubeFeedService } from './youtube-feed.service';

@Module({
    imports: [TypeOrmModule.forFeature([Feed])],
    providers: [YouTubeFeedService, FeedService, Logger],
    exports: [YouTubeFeedService]
})
export class YouTubeFeedModule { }
