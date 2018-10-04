import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './social-media-card.module.scss';

const InstagramCard = ({data}) => (
    <div className={`${styles['news-card']} ${styles['vertical']} ${styles['instagram']}`}>
        <div className={styles['content']}>
            <div className={styles['source']}>
                <div className={styles['author']}>
                <img src = {data.thumbnail} />
                 <p>{data.author}</p>
                </div>
                <span>{data.source}</span>
            </div>
            <div className={styles['image']} style={{ backgroundImage: `url(${data.img})` }}></div>
            <div className={styles['description']}>
                <p><b>{data.author}</b> {data.description}</p>
            </div>
            <div className={styles['footer']}>
                <Timestamp time = {data.timestamp} />
            </div>
        </div>
    </div>
 );

 export default InstagramCard;