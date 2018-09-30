import React from 'react';
import Timestamp from './elements/Timestamp';
import './newscard.css';

const TwitterNewsCard = ({data}) => (
    <div className="news_card vertical twitter">
        <div className = "content">
            <div className="source">
                <div className="author">
                    <img src = {data.thumbnail} />
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