import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feed } from '../feeds/feed.entity';
import { FeedService } from '../feeds/feed.service';
import { InstagramFeedService } from './instagram.service';

@Module({
    imports: [TypeOrmModule.forFeature([Feed])],
    providers: [InstagramFeedService, FeedService, Logger],
    exports: [InstagramFeedService]
})
export class InstagramFeedModule { }
