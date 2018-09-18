import { ConfigService } from '../config/config.service';
const config = new ConfigService();

const sources = {
    vantaa: config.vantaaFacebookPage,
};
export default sources;