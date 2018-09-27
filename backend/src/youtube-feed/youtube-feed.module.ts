import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YouTubeFeedController } from './youtube-feed.controller';
import { YouTubeFeed } from './youtube-feed.entity';
import { YouTubeFeedService } from './youtube-feed.service';

@Module({
    controllers: [YouTubeFeedController],
    imports: [TypeOrmModule.forFeature([YouTubeFeed])],
    providers: [YouTubeFeedService, Logger],
    exports: [YouTubeFeedService],
})
export class YouTubeFeedModule { }
