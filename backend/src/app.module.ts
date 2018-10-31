import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RssFeedModule } from './rss-feed/rss-feed.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionDetails } from './connection';
import { YouTubeFeedModule } from './youtube-feed/youtube-feed.module';
import { FacebookFeedModule } from './facebook-feed/facebook-feed.module';
import { FeedModule } from './feeds/feed.module';
import { EventModule } from './event/event.module';
import { FrontendMiddleware } from './middleware/frontend.middleware';
import { TwitterFeedModule } from 'twitter-feed/twitter-feed.module';
import { InstagramFeedModule } from 'instagram/instagram.module';
import { FactModule } from './facts/fact.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(connectionDetails),
    RssFeedModule,
    YouTubeFeedModule,
    FacebookFeedModule,
    FeedModule,
    EventModule,
    TwitterFeedModule,
    InstagramFeedModule,
    FactModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(FrontendMiddleware).forRoutes('/**');
  }
}
