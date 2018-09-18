import React from 'react';
import Timestamp from './elements/Timestamp';
import './newscard.css';


const NewsCard = ({data}) => (
    <div className="news_card">
        <div className = "image" style={{ backgroundImage: `url(${data.img})` }}></div>
        <div className = "content">
            <span className="source">{data.source}</span>
            <p>{data.title}</p>
            <div className="footer">
                <Timestamp time = {data.timestamp} />
            </div>
        </div>
    </div>
 );

 export default NewsCard;