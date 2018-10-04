
import { ConfigService } from '../config/config.service';
import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { FeedService } from '../feeds/feed.service';

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
        private readonly feedService: FeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('YouTubeFeedService');
    }

    async onModuleInit() {
        await this.fetchAndSaveYouTubeFeed();
    }

    async fetchAndSaveYouTubeFeed() {
        this.logger.log('Fetching Youtube feeds Started');
        try {
            const feed = await axios.get(youtube_fetch_url);
            const videoIds = feed.data.items.map(item => item.id.videoId);
            const videoDetails = await axios.get(youtube_video_details_url + videoIds.filter(id => id));
            const youTubeFeeds = feed.data.items.map(item => {
                const details = videoDetails.data.items.find(videoItem => videoItem.id === item.id.videoId);
                return {
                    video_id: item.id.videoId,
                    playlist_id: item.id.playlistId,
                    pub_date: item.snippet.publishedAt,
                    title: item.snippet.title,
                    source: 'Youtube',
                    description: item.snippet.description,
                    image_url: item.snippet.thumbnails ? item.snippet.thumbnails.medium.url : null,
                    channel_title: item.snippet.channelTitle,
                    likes: details ? (details.statistics ? details.statistics.likeCount : null) : null,
                    views: details ? (details.statistics ? details.statistics.viewCount : null) : null
                }
            });
            await this.feedService.saveFeeds(youTubeFeeds);
            this.logger.log('Fetching Youtube feeds Completed');
        } catch (error) {
            this.logger.error(`Error in fetching and saving You Tube feed: ${error.message}`);
        }
    }
}