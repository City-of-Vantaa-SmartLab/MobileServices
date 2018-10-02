import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './news-card.module.scss';


const NewsCard = ({data}) => (
    <div className={styles["news-card"]}>
        <div className={styles["image"]} style={{ backgroundImage: `url(${data.img})` }}></div>
        <div className={styles["content"]}>
            <div className={styles["source"]}>
                <span>{data.source}</span>
            </div>
            <div className={styles["description"]}>
                <p>{data.title}</p>
                <span>by @authorname</span>
            </div>
            <div className={styles["footer"]}>
                <Timestamp time={data.timestamp} />
            </div>
        </div>
    </div>
 );

 export default NewsCard;