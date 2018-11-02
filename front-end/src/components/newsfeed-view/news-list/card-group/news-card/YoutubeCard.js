import React from 'react';
import Timestamp from './elements/Timestamp';
import Youtube from 'react-youtube';
import styles from './social-media-card.module.scss';
import share_button from 'assets/images/share_button.svg';
import copy_icon from 'assets/images/copy_icon.svg';
import ToastNotification from './elements/ToastNotification';
import CardHOC from './CardHOC';

class YoutubeCard extends React.Component {
    render() {
        let { data } = this.props;
        const opts = {
            width: '100%',
            height: '180',
            origin: window.location.origin,
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
                        <img
                            src={navigator.share ? share_button : copy_icon}
                            alt="Share button"
                            onClick={() => this.props.handleClick(data.title, data.description)}
                        />
                    </div>
                </div>
                {this.props.showNotification && <ToastNotification text="Copied to clipboard" />}
            </div>
        );
    }
}

export default CardHOC(YoutubeCard);
