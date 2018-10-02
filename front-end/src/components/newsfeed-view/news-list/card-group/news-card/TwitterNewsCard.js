import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './news-card.module.scss';

const TwitterNewsCard = ({data}) => (
    <div className={`${styles['news-card']} ${styles['vertical']} ${styles['twitter']}`}>
        <div className={styles['content']}>
            <div className={styles['source']}>
                <div className={styles['author']}>
                    <img src = {data.thumbnail} />
                    <p>{data.author}</p>
                </div>
                <span>{data.source}</span>
            </div>
            <div className={styles['description']}>
                <p>{data.description}</p>
            </div>
            <div className={styles['footer']}>
                <Timestamp time = {data.timestamp} />
            </div>
        </div>
    </div>
 );

 export default TwitterNewsCard;