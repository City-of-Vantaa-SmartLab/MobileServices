import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './news-card.module.scss';
import ExpandableContent from './elements/ExpandableContent';
import img from 'assets/images/cutiepie.jpg';
import share_button from 'assets/images/share_button.svg';
import copy_icon from 'assets/images/copy_icon.svg';
import { copyToClipboard } from 'utils/utils';
import ToastNotification from './elements/ToastNotification';

class NewsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNotification: false,
        };
    }
    share = () => {
        if (navigator.share) {
            navigator.share({
                url: this.props.data.page_link,
                title: this.props.data.source,
                description: this.props.data.title,
            });
        } else {
            let textToBeCopied =
                this.props.data.source + '\r\n\r\n' + this.props.data.title + '\r\n\r\n' + this.props.data.page_link;
            copyToClipboard(textToBeCopied);
            this.setState({ showNotification: true });
            setTimeout(() => {
                this.setState({ showNotification: false });
            }, 1200);
        }
    };

    render() {
        let { data } = this.props;
        return (
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
                        <img src={navigator.share ? share_button : copy_icon} alt="Share button" onClick={this.share} />
                    </div>
                </div>
                {this.state.showNotification && <ToastNotification text="Copied to clipboard" />}
            </div>
        );
    }
}

export default NewsCard;
