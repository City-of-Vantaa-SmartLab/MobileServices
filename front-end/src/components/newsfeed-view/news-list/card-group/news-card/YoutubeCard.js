import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './social-media-card.module.scss';

const YoutubeCard = ({ data }) => {
    console.log(data);
    return (
        <div className={`${styles['social-media-card']} ${styles['youtube']}`}>
            <div className={styles['service-source']}>{data.source}</div>
            <div className={styles['content']}>
                <div className={styles['content-source']}>
                    <img src={data.author_thumbnail} alt="Youtube thumbnail" />
                    <div>{data.author}</div>
                </div>
                <div className={styles['image']}>
                    <img src={data.image_url} alt="Youtube" />
                </div>
                <div className={styles['description']}>{data.description}</div>
                <div className={styles['footer']}>
                    <Timestamp time={data.pub_date} />
                </div>
            </div>
        </div>
    );
};

export default YoutubeCard;
