import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './social-media-card.module.scss';
import ExpandableContent from './elements/ExpandableContent';

const FacebookCard = ({data}) => (
    <div className={`${styles['social-media-card']} ${styles['facebook']}`}>
        <div className={styles['service-source']}>
            {data.source}
        </div>
        <div className={styles['content']}>
            <div className={styles['content-source']}>
                <img src={data.thumbnail} alt='Facebook thumbnail' />
                <div>{data.author}</div>
            </div>
            <div className={styles['description']}>
                <ExpandableContent 
                    maxLine={4} 
                    description={data.description} 
                    ellipsis='... more'
                    lineHeight={1.7} 
                    ellipsisClickable={true} />
            </div>
            <div className={styles['image']}>
                <img src={data.img} alt='Facebook' />
            </div>
            <div className={styles['footer']}>
                <Timestamp time = {data.timestamp} />
            </div>
        </div>
    </div>
 );

 export default FacebookCard;