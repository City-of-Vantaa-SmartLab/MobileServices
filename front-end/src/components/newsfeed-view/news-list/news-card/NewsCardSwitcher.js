import React from 'react';
import NewsCard from './NewsCard';
import InstagramNewsCard from './InstagramNewsCard';
import TwitterNewsCard from './TwitterNewsCard';
import FacebookNewsCard from './FacebookNewsCard';



const NewsCardSwitcher = ({type, data}) => {
    switch (type) {
        case 'twitter':
            return <TwitterNewsCard data = {data} />
        case 'instagram':
            return <InstagramNewsCard data = {data} />
        case 'facebook':
            return <FacebookNewsCard data = {data} />
        default:
            return <NewsCard data = {data} />
    }
};

 export default NewsCardSwitcher;