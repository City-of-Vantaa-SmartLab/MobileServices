import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './news-card.module.scss';

const InstagramNewsCard = ({data}) => (
    <div className={`${styles["news-card"]} ${styles["instagram"]}`}>
        <div className={styles["content"]}>
            <div className={styles["source"]}>
                <div className={styles["author"]}>
                    <img src="https://pbs.twimg.com/profile_images/559709902990348288/NwYEyKfg_400x400.jpeg" alt="Placeholder for instagram" />
                    <p>{data.author}</p>
                </div>
                <span>{data.source}</span>
            </div>
            <div className={styles["image"]} style={{ backgroundImage: `url(${data.img})` }}></div>
            <div className={styles["description"]}>
                <p><b>{data.author}</b> {data.description}</p>
            </div>
            <div className={styles["footer"]}>
                <Timestamp time = {data.timestamp} />
            </div>
        </div>
    </div>
 );

 export default InstagramNewsCard;