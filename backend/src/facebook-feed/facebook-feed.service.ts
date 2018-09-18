import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import sources from './facebook-feed-sources';
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
            const vantaaFacebookDataUrl = `https://graph.facebook.com/v3.1/${sources.vantaa}/posts?`
                + `fields=id,name,message,story,picture,message_tags,story_tags,caption,`
                + `created_time,description,place,properties,status_type,type,comments,reactions`
                + `&access_token=${config.facebookPageToken}`;
            const facebookFeeds = this.transformData((await axios.get(vantaaFacebookDataUrl)).data.data);
            await this.facebookFeedRepository.save(facebookFeeds);
        } catch (error) {
            this.logger.error(`Failed to get facebook feeds: ${error.message}`)
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

    async findAll(): Promise<FacebookFeed[]> {
        return await this.facebookFeedRepository.find();
    }

}