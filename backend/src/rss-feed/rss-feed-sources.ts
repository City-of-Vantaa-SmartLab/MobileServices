import { ConfigService } from '../config/config.service';
const config = new ConfigService();

const sources = {
    news: config.vantaaNewsPath,
    stories: config.vantaaStoriesPath
};
export default sources;