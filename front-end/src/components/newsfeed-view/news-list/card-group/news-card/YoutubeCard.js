import React from 'react';
import Timestamp from './elements/Timestamp';
import Youtube from 'react-youtube';
import styles from './social-media-card.module.scss';
import share_button from 'assets/images/share_button.svg';
import copy_icon from 'assets/images/copy_icon.svg';
import { copyToClipboard } from 'utils/utils';

class YoutubeCard extends React.Component {
    share = () => {
        let videoUrl = 'https://www.youtube.com/watch?v=' + this.props.data.video_id;

        if (navigator.share) {
            navigator.share({ url: videoUrl, title: this.props.data.title, description: this.props.data.description });
        } else {
            let textToBeCopied =
                this.props.data.title + '\r\n\r\n' + this.props.data.description + '\r\n\r\n' + videoUrl;
            copyToClipboard(textToBeCopied);
        }
    };

    render() {
        let { data } = this.props;

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
                        <img src={navigator.share ? share_button : copy_icon} alt="Share button" onClick={this.share} />
                    </div>
                </div>
            </div>
        );
    }
}

export default YoutubeCard;
