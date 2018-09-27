import React from 'react';
import Timestamp from './elements/Timestamp';
import './newscard.scss';


const NewsCard = ({data}) => (
    <div className="news_card">
        <div className = "image" style={{ backgroundImage: `url(${data.img})` }}></div>
        <div className = "content">
            <div className="source">
                <span>{data.source}</span>
            </div>
            <div className="description">
                <p>{data.title}</p>
                <span>by @authorname</span>
            </div>
            <div className="footer">
                <Timestamp time = {data.timestamp} />
            </div>
        </div>
    </div>
 );

 export default NewsCard;