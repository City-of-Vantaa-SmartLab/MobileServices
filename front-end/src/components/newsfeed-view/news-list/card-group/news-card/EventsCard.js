import React from 'react';
import { getEventsTime } from 'utils/utils';
import styles from './social-media-card.module.scss';
import { connect } from 'react-redux';

const EventsCard = ({ data, i18n }) => {
    return (
        <div className={`${styles['social-media-card']} ${styles['events']}`}>
            <div className={styles['service-source']}>{data.source}</div>
            <div className={styles['content']}>
                <div className={styles['image']}>
                    <img src={data.image_url} alt="Events" />
                </div>
                <div className={styles['description']}>
                    <div className={styles['title']}>
                        <a href={data.page_link}>{data.title}</a>
                    </div>
                    <div className={styles['event-time']}>
                        {getEventsTime(data.start_date, i18n.locale)}
                        <br />
                        {data.location}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    i18n: state.i18n,
});

export default connect(mapStateToProps)(EventsCard);
