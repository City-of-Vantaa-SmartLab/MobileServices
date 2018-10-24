import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './social-media-card.module.scss';

const TwitterCard = ({ data }) => (
    <div className={`${styles['social-media-card']} ${styles['twitter']}`}>
        <div className={styles['service-source']}>{data.source}</div>
        <div className={styles['content']}>
            <div className={styles['content-source']}>
                <img src={data.author_thumbnail} alt="Twitter thumbnail" />
                <div>
                    {data.author}
                    <br />
                    <span className={styles['twitter-handle']}>@{data.userhandle}</span>
                </div>
            </div>
            <div className={styles['description']}>
                <div>{data.description}</div>
            </div>
            <div className={styles['footer']}>
                <Timestamp time={data.pub_date} />
            </div>
        </div>
    </div>
);

export default TwitterCard;
