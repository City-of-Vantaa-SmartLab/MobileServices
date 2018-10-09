import React from 'react';
import NewsCard from './NewsCard';
import InstagramCard from './InstagramCard';
import TwitterCard from './TwitterCard';
import FacebookCard from './FacebookCard';



const NewsCardSwitcher = ({type, data}) => {
    switch (type) {
        case 'twitter':
            return <TwitterCard data = {data} />;
        case 'instagram':
            return <InstagramCard data = {data} />;
        case 'facebook':
            return <FacebookCard data = {data} />;
        default:
            return <NewsCard data = {data} />;
    }
};

 export default NewsCardSwitcher;