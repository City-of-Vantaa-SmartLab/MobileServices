import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import sources from './rss-feed-sources';
import { RssFeed } from './rss-feed.entity';
import { Repository } from 'typeorm';
const Parser = require('rss-parser');
const parser = new Parser();


@Injectable()
export class RssFeedService {

    constructor(@InjectRepository(RssFeed)
    private readonly rssFeedRepository: Repository<RssFeed>) {

    }

    async onModuleInit() {
        await this.fetchAndSaveRssFeeds();
    }

    async fetchAndSaveRssFeeds() {
        const news = await parser.parseURL(sources.news);
        await this.rssFeedRepository.save(news.items);
        const stories = await parser.parseURL(sources.stories);
        await this.rssFeedRepository.save(stories.items);
    }

    async findAll() {
        return await this.findAll();
    }
}