import { ConfigService } from '../config/config.service';
const config = new ConfigService();

const sources = {
    news: config.vantaaNewsPath,
    news_en: config.vantaaNewsPathEn,
    news_sv: config.vantaaNewsPathSv,
    stories: config.vantaaStoriesPath,
    aikuisopisto: config.vantaaAikuisopistoPath,
    nuorten: config.vantaaNuorten,
    kaupunginmuseo: config.vantaaKaupunginmuseo,
    events: config.vantaaEvents

};
export default sources;