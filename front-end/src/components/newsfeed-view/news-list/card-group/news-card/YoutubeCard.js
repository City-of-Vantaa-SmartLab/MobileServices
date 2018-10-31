import React from 'react';
import Timestamp from './elements/Timestamp';
import Youtube from 'react-youtube';
import styles from './social-media-card.module.scss';

const YoutubeCard = ({ data }) => {
    console.log(data);

    const opts = {
        width: '100%',
        height: '180',
    };

    return (
        <div className={`${styles['social-media-card']} ${styles['youtube']}`}>
            <div className={styles['service-source']}>{data.source}</div>
            <div className={styles['content']}>
                <div className={styles['content-source']}>
                    <img src={data.author_thumbnail} alt="Youtube thumbnail" />
                    <div>{data.author}</div>
                </div>
                <div className={styles['image']}>
                    <Youtube opts={opts} videoId={data.video_id} />
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
