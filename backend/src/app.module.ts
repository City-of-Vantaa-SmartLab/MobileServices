import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RssFeedModule } from './rss-feed/rss-feed.module'
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionDetails } from './connection';

@Module({
  imports: [TypeOrmModule.forRoot(connectionDetails), RssFeedModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
