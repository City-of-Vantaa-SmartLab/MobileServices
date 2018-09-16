import React, {Component} from 'react';
import NewsCard from './NewsCard';
import InstagramNewsCard from './InstagramNewsCard';
import TwitterNewsCard from './TwitterNewsCard';



const NewsCardSwitcher = ({type, data}) => {
    console.log(type);
    switch (type) {
        case 'twitter':
            return <TwitterNewsCard data = {data} />
        case 'instagram':
            return <InstagramNewsCard data = {data} />
        default:
            return <NewsCard data = {data} />
    }

}

 export default NewsCardSwitcher;