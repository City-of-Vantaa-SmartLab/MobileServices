import React from 'react';
import Timestamp from './elements/Timestamp';
import ExpandableContent from './elements/ExpandableContent';
import styles from './social-media-card.module.scss';

const YoutubeCard = ({ data }) => (
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
            <div className={styles['description']}>
                <div>
                    <ExpandableContent
                        maxLine={3}
                        author={data.author}
                        description={data.description}
                        ellipsis="... more"
                        lineHeight={1.7}
                        ellipsisClickable={true}
                    />
                </div>
            </div>
            <div className={styles['footer']}>
                <Timestamp time={data.pub_date} />
            </div>
        </div>
    </div>
);

export default YoutubeCard;
