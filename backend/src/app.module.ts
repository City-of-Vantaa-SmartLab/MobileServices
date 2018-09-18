import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RssFeedModule } from './rss-feed/rss-feed.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionDetails } from './connection';
import { YouTubeFeedModule } from './youtube-feed/youtube-feed.module';
import { FacebookFeedModule } from './facebook-feed/facebook-feed.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(connectionDetails),
    RssFeedModule,
    YouTubeFeedModule,
    FacebookFeedModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
