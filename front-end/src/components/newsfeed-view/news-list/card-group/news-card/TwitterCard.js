import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './social-media-card.module.scss';
import share_button from 'assets/images/share_button.svg';
import copy_icon from 'assets/images/copy_icon.svg';
import { share } from 'utils/utils';
import ToastNotification from './elements/ToastNotification';

class TwitterCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNotification: false,
        };
    }

    handleClick = () => {
        let { data } = this.props;
        let isCopySuccessful = share({ url: data.page_link, title: data.screen_name, description: data.description });

        if (!navigator.share && isCopySuccessful) {
            this.setState({ showNotification: true });
            setTimeout(() => {
                this.setState({ showNotification: false });
            }, 1200);
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
                        <img
                            src={navigator.share ? share_button : copy_icon}
                            alt="Share button"
                            onClick={this.handleClick}
                        />
                    </div>
                </div>
                {this.state.showNotification && <ToastNotification text="Copied to clipboard" />}
            </div>
        );
    }
}

export default TwitterCard;
