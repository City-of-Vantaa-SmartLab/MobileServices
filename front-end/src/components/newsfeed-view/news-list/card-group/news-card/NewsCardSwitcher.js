import React from 'react';
import NewsCard from './NewsCard';
import InstagramCard from './InstagramCard';
import TwitterCard from './TwitterCard';
import FacebookCard from './FacebookCard';
import YoutubeCard from './YoutubeCard';
import EventsCard from './EventsCard';

const NewsCardSwitcher = ({ type, data }) => {
    switch (type.toLowerCase()) {
        case 'twitter':
            return <TwitterCard data={data} />;
        case 'instagram':
            return <InstagramCard data={data} />;
        case 'facebook':
            return <FacebookCard data={data} />;
        case 'youtube':
            return <YoutubeCard data={data} />;
        case 'events':
            return <EventsCard data={data} />;
        default:
            return <NewsCard data={data} />;
    }
};

export default NewsCardSwitcher;
