import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { sources, queryParams } from './facebook-utils';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionRepository, Repository, Transaction } from 'typeorm';
import { FacebookFeed } from './facebook-feed.entity';
const config = new ConfigService();
const axios = require('axios');

@Injectable()
export class FacebookFeedService {

    constructor(
        @InjectRepository(FacebookFeed)
        @TransactionRepository(FacebookFeed)
        private readonly facebookFeedRepository: Repository<FacebookFeed>,
        private readonly logger: Logger) {
        this.logger = new Logger('FacebookFeedService');
    }

    async onModuleInit() {
        await this.fetchFacebookFeeds();
    }

    @Transaction()
    async fetchFacebookFeeds() {
        try {
            const vantaaFacebookDataUrl = `${config.facebookGraphApi}${sources.vantaa}/posts?`
                + `fields=${queryParams.join(',')}`
                + `&access_token=${config.facebookPageToken}`;
            const facebookFeeds = this.transformData((await axios.get(vantaaFacebookDataUrl)).data.data);
            await this.facebookFeedRepository.save(facebookFeeds);
        } catch (error) {
            this.logger.error(`Failed to get facebook feeds: ${error}`)
        }
    }

    transformData = feeds => {
        return feeds.map(feed => {
            const feed_id = feed.id;
            delete feed.id;
            return {
                ...feed,
                comments: feed.comments ? feed.comments.data : null,
                reactions: feed.reactions ? feed.reactions.data : null,
                content: feed.story ? feed.story : feed.message,
                source: 'facebook',
                title: feed.status_type,
                pub_date: feed.created_time,
                feed_id
            }
        });
    }

    async find(limit: number): Promise<FacebookFeed[]> {
        return await this.facebookFeedRepository.find({
            order: {
                pub_date: 'DESC'
            },
            take: limit
        });
    }

}