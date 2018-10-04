import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './social-media-card.module.scss';

const InstagramCard = ({data}) => (
    <div className={`${styles['social-media-card']} ${styles['instagram']}`}>
        <div className={styles["service-source"]}>
            {data.source}
        </div>
        <div className={styles['content']}>
            <div className={styles['content-source']}>
                <img src={data.thumbnail} alt='Instagram thumbnail' />
                <div>{data.author}</div>
            </div>
            <div className={styles['image']}>
                <img src={data.img} alt='Instagram' />
            </div>
            <div className={styles['description']}>
                <div className={styles['likes']}>{data.likes} likes</div>
                <div>
                    <b>{data.author}</b> {data.description}
                </div>
            </div>
            <div className={styles['footer']}>
                <Timestamp time = {data.timestamp} />
            </div>
        </div>
    </div>
 );

 export default InstagramCard;