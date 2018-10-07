import { ConfigService } from '../config/config.service';
const config = new ConfigService();

const sources = {
    events: config.vantaaEvents
};
export default sources;