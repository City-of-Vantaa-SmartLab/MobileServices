
import { ConfigService } from '../config/config.service';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { YouTubeFeed } from './youtube-feed.entity';
import { TransactionRepository, Repository, Transaction } from 'typeorm';
import axios from 'axios';

const config = new ConfigService();

const API_KEY = config.youTubeApiKey;
const CHANNEL_ID = config.youTubeChannelID;
const MAX_RESULTS = config.youTubeChannelListLimit;

const youtube_fetch_url = `https://www.googleapis.com/youtube/v3/search?`
    + `key=${API_KEY}`
    + `&channelId=${CHANNEL_ID}`
    + `&part=snippet,id`
    + `&order=date`
    + `&maxResults=${MAX_RESULTS}`;

const youtube_video_details_url = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=statistics&id=`;

@Injectable()
export class YouTubeFeedService {

    constructor(
        @InjectRepository(YouTubeFeed)
        @TransactionRepository(YouTubeFeed)
        private readonly youTubeFeedRepository: Repository<YouTubeFeed>,
        private readonly logger: Logger) {
        this.logger = new Logger('YouTubeFeedService');
    }

    async onModuleInit() {
        await this.fetchAndSaveYouTubeFeed();
    }

    @Transaction()
    async fetchAndSaveYouTubeFeed() {
        try {
            const feed = await axios.get(youtube_fetch_url);
            const videoIds = feed.data.items.map(item => item.id.videoId);
            const videoDetails = await axios.get(youtube_video_details_url + videoIds.filter(id => id));
            const youTubeFeeds = feed.data.items.map(item => {
                const details = videoDetails.data.items.find(videoItem => videoItem.id === item.id.videoId);
                return {
                    etag: item.etag,
                    kind: item.id.kind,
                    video_id: item.id.videoId,
                    playlist_id: item.id.playlistId,
                    pub_date: item.snippet.publishedAt,
                    title: item.snippet.title,
                    content: item.snippet.description,
                    thumbnails: item.snippet.thumbnails,
                    channel_title: item.snippet.channelTitle,
                    statistics: details ? details.statistics : null
                }
            });
            await this.youTubeFeedRepository.save(youTubeFeeds);
        } catch (error) {
            this.logger.error(`Error in fetching and saving You Tube feed: ${error.message}`);
        }
    }

    async findAll(): Promise<YouTubeFeed[]> {
        return await this.youTubeFeedRepository.find();
    }
}