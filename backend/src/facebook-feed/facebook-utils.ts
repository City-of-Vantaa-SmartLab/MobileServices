import { ConfigService } from '../config/config.service';
const config = new ConfigService();

export const sources = {
    vantaa: config.vantaaFacebookPage,
};

export const queryParams = [
    'id',
    'name',
    'from',
    'message',
    'story',
    'picture',
    'message_tags',
    'story_tags',
    'caption',
    'created_time',
    'description',
    'place',
    'properties',
    'status_type',
    'type',
    'comments',
    'reactions'
];
