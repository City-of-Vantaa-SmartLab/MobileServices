import React from 'react';
import Timestamp from './elements/Timestamp';
import './newscard.css';

const InstagramNewsCard = ({data}) => (
    <div className="news_card instagram">
        <div className = "content">
            <div className="source">
                <div className="author">
                    <img src = "https://pbs.twimg.com/profile_images/559709902990348288/NwYEyKfg_400x400.jpeg" />
                    <p>{data.author}</p>
                </div>
                <span>{data.source}</span>
            </div>
            <div className = "image" style={{ backgroundImage: `url(${data.img})` }}></div>
            <div className="description">
                <p><b>{data.author}</b> {data.description}</p>
            </div>
            <div className="footer">
                <Timestamp time = {data.timestamp} />
            </div>
        </div>
    </div>
 );

 export default InstagramNewsCard;