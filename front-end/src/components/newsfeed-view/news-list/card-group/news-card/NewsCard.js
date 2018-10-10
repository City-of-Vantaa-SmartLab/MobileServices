import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './news-card.module.scss';
import ExpandableContent from './elements/ExpandableContent';

const NewsCard = ({data}) => (
    <div className={styles["news-card"]}>
        <div className={styles["image"]} style={{ backgroundImage: `url(${data.img})` }}></div>
        <div className={styles["content"]}>
            <div className={styles["source"]}>
                <span>{data.source}</span>
            </div>
            <div className={styles["description"]}>
                <p>{data.title}</p>
            </div>
            <div className={styles["footer"]}>
                <Timestamp time={data.pub_date} />
            </div>
        </div>
    </div>
 );

 export default NewsCard;