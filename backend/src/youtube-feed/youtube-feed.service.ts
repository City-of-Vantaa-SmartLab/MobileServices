
import { ConfigService } from '../config/config.service';
import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { FeedService } from '../feeds/feed.service';
import { sourceNames } from '../feeds/feed.sources';

const config = new ConfigService();

const API_KEY = config.youTubeApiKey;
const CHANNEL_ID = config.youTubeChannelID;
const MAX_RESULTS = config.youTubeChannelListLimit;

const channelDetailsUrl = `${config.youTubeBaseUrl}channels?`
    + `part=snippet`
    + `&id=UCPazkSuII3Jq1JNFM1k2tWg`
    + `&key=${API_KEY}`;

const youtubeFetchUrl = `${config.youTubeBaseUrl}search?`
    + `key=${API_KEY}`
    + `&channelId=${CHANNEL_ID}`
    + `&part=snippet`
    + `&order=date`
    + `&maxResults=${MAX_RESULTS}`;

const youtubeVideoDetailsUrl = `${config.youTubeBaseUrl}videos?`
    + `key=${API_KEY}`
    + `&part=statistics`
    + `&id=`;

@Injectable()
export class YouTubeFeedService {

    constructor(
        private readonly feedService: FeedService,
        private readonly logger: Logger) {
        this.logger = new Logger('YouTubeFeedService');
    }

    onModuleInit() {
        setInterval(() => {
            this.fetchAndSaveYouTubeFeed();
        }, config.updateInterval);
    }

    async fetchAndSaveYouTubeFeed() {
        this.logger.log('Fetching Youtube feeds Started');
        try {
            const channelDetails = await axios.get(channelDetailsUrl);
            let channelTitle;
            let channelProfileImage;
            if (channelDetails
                && channelDetails.data
                && channelDetails.data.items
                && channelDetails.data.items.length !== 0
                && channelDetails.data.items[0].snippet) {
                const snippet = channelDetails.data.items[0].snippet;
                channelTitle = snippet.title;
                channelProfileImage = snippet.thumbnails && snippet.thumbnails.default ? snippet.thumbnails.default.url : null;
            }

            const feed = await axios.get(youtubeFetchUrl);
            let youTubeFeeds = feed.data.items.filter(item => item.id.videoId)
            youTubeFeeds = await this.filterAlreadyExistingFeeds(youTubeFeeds);

            const videoIds = youTubeFeeds.map(item => item.id.videoId);
            const videoDetails = await axios.get(youtubeVideoDetailsUrl + videoIds);

            youTubeFeeds = this.formatFeed(youTubeFeeds, videoDetails, channelTitle, channelProfileImage);
            await this.feedService.saveFeeds(youTubeFeeds);
            this.logger.log('Fetching Youtube feeds Completed');
        } catch (error) {
            this.logger.error(`Error in fetching and saving You Tube feed: ${error.message}`);
        }
    }

    formatFeed = (youTubeFeeds, videoDetails, channelTitle, channelProfileImage) => {
        return youTubeFeeds.map(item => {
            const details = videoDetails.data.items.find(videoItem => videoItem.id === item.id.videoId);
            return {
                author: channelTitle,
                author_thumbnail: channelProfileImage,
                video_id: item.id.videoId,
                pub_date: item.snippet.publishedAt,
                title: item.snippet.title,
                source: sourceNames.YOUTUBE,
                description: item.snippet.description,
                image_url: item.snippet.thumbnails ? item.snippet.thumbnails.medium.url : null,
                channel_title: item.snippet.channelTitle,
                likes: details ? (details.statistics ? details.statistics.likeCount : null) : null,
                views: details ? (details.statistics ? details.statistics.viewCount : null) : null
            }
        });
    }

    filterAlreadyExistingFeeds = (feeds) => {
        return this.feedService.fetchFeedsBySource(sourceNames.YOUTUBE).
            then(existingFeeds => existingFeeds.map(feed => feed.video_id)).
            then(existingFeedIds => feeds.filter(feed => !existingFeedIds.includes(feed.id.videoId)));
    }
}