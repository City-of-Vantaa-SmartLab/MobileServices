import { Module, Logger } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { Feed } from './feed.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedService } from './feed.service';

@Module({
    controllers: [FeedController],
    imports: [TypeOrmModule.forFeature([Feed])],
    providers: [FeedService, Logger],
})
export class FeedModule { }
