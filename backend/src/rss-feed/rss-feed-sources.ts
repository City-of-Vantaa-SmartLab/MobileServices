import { ConfigService } from '../config/config.service';
const config = new ConfigService();

const sources = {
    news: config.vantaaNewsPath,
    stories: config.vantaaStoriesPath,
    aikuisopisto: config.vantaaAikuisopistoPath,
    nuorten: config.vantaaNuorten,
    kaupunginmuseo: config.vantaaKaupunginmuseo,
    events: config.vantaaEvents

};
export default sources;