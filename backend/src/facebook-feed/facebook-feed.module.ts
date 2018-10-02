import { Module, Logger } from '@nestjs/common';
import { FacebookFeedService } from './facebook-feed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacebookFeed } from './facebook-feed.entity';

@Module({
    imports: [TypeOrmModule.forFeature([FacebookFeed])],
    providers: [FacebookFeedService, Logger],
    exports: [FacebookFeedService],
})
export class FacebookFeedModule { }
