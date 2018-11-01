import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './social-media-card.module.scss';
import share_button from 'assets/images/share_button.svg';
import copy_icon from 'assets/images/copy_icon.svg';
import { copyToClipboard } from 'utils/utils';

class TwitterCard extends React.Component {
    share = () => {
        console.log('Shared');
        let tweetUrl = 'https://twitter.com/' + this.props.data.screen_name + '/status/' + this.props.data.feed_id;

        if (navigator.share) {
            navigator.share({
                url: tweetUrl,
                title: this.props.data.screen_name,
                description: this.props.data.description,
            });
        } else {
            let textToBeCopied =
                this.props.data.screen_name + '\r\n\r\n' + this.props.data.description + '\r\n\r\n' + tweetUrl;
            copyToClipboard(textToBeCopied);
        }
    };

    render() {
        let { data } = this.props;
        return (
            <div className={`${styles['social-media-card']} ${styles['twitter']}`}>
                <div className={styles['service-source']}>{data.source}</div>
                <div className={styles['content']}>
                    <div className={styles['content-source']}>
                        <img src={data.author_thumbnail} alt="Twitter thumbnail" />
                        <div>
                            {data.author}
                            <br />
                            <span className={styles['twitter-handle']}>@{data.userhandle}</span>
                        </div>
                    </div>
                    <div className={styles['description']}>
                        <div>{data.description}</div>
                    </div>
                    <div className={styles['footer']}>
                        <Timestamp time={data.pub_date} />
                        <img src={navigator.share ? share_button : copy_icon} alt="Share button" onClick={this.share} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TwitterCard;
