import React from 'react';
import Timestamp from './elements/Timestamp';
import './newscard.scss';

const TwitterNewsCard = ({data}) => (
    <div className="news_card twitter">
    <div className = "content">
        <div className="source">
            <div className="author">
                <img src = "https://pbs.twimg.com/profile_images/559709902990348288/NwYEyKfg_400x400.jpeg" alt="Placeholder for twitter" />
                <p>{data.author}</p>
            </div>
            <span>{data.source}</span>
        </div>
        <div className="description">
            <p>{data.description}</p>
        </div>
        <div className="footer">
            <Timestamp time = {data.timestamp} />
        </div>
    </div>
    </div>
 );

 export default TwitterNewsCard;