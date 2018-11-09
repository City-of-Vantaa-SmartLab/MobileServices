import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './social-media-card.module.scss';
import share_button from 'assets/images/share_button.svg';
import copy_icon from 'assets/images/copy_icon.svg';
import ToastNotification from './elements/ToastNotification';
import CardHOC from './CardHOC';

class TwitterCard extends React.Component {
    render() {
        let { data } = this.props;
        return (
            <div className={`${styles['social-media-card']} ${styles['twitter']}`}>
                <div className={styles['service-source']}>{data.source}</div>
                <div className={styles['content']}>
                    <div className={styles['content-source']}>
                        <img src={data.author_thumbnail} alt="Twitter thumbnail" />
                        <div>@vantaankaupunki</div>
                    </div>
                    <div className={styles['description']}>
                        <div>{data.description}</div>
                    </div>
                    <div className={styles['footer']}>
                        <Timestamp time={data.pub_date} />
                        <img
                            src={navigator.share ? share_button : copy_icon}
                            alt="Share button"
                            onClick={() => this.props.handleClick(data.screen_name, data.description)}
                        />
                    </div>
                </div>
                {this.props.showNotification && <ToastNotification text="Copied to clipboard" />}
            </div>
        );
    }
}

export default CardHOC(TwitterCard);
