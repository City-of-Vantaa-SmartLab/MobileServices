import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './news-card.module.scss';
import ExpandableContent from './elements/ExpandableContent';
import img from 'assets/images/cutiepie.jpg';

const NewsCard = ({ data }) => (
    <div className={styles['news-card']}>
        <div className={styles['source']}>{data.source}</div>
        <div className={styles['image']} style={{ backgroundImage: `url(${img})` }} />
        <div className={styles['content']}>
            <div className={styles['description']}>
                <span>Author / page headline</span>
                <ExpandableContent
                    maxLine={3}
                    description={data.title}
                    ellipsis="..."
                    lineHeight={1.9}
                    className={styles['content-text']}
                    ellipsisClickable={false}
                />
            </div>
            <div className={styles['footer']}>
                <Timestamp time={data.pub_date} />
            </div>
        </div>
    </div>
);

export default NewsCard;
