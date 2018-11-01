import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './social-media-card.module.scss';
import ExpandableContent from './elements/ExpandableContent';
import share_button from 'assets/images/share_button.svg';
import copy_icon from 'assets/images/copy_icon.svg';
import { copyToClipboard } from 'utils/utils';

class FacebookCard extends React.Component {
    share = () => {
        let facebookUrl = '';

        if (navigator.share) {
            navigator.share({
                url: facebookUrl,
                title: this.props.data.author,
                description: this.props.data.description,
            });
        } else {
            let textToBeCopied =
                this.props.data.author + '\r\n\r\n' + this.props.data.description + '\r\n\r\n' + facebookUrl;
            copyToClipboard(textToBeCopied);
        }
    };

    render() {
        let { data } = this.props;
        return (
            <div className={`${styles['social-media-card']} ${styles['facebook']}`}>
                <div className={styles['service-source']}>{data.source}</div>
                <div className={styles['content']}>
                    <div className={styles['content-source']}>
                        <img src={data.author_thumbnail} alt="Facebook thumbnail" />
                        <div>{data.author}</div>
                    </div>
                    <div className={styles['description']}>
                        <ExpandableContent
                            maxLine={4}
                            description={data.description}
                            ellipsis="... more"
                            lineHeight={1.7}
                            ellipsisClickable={true}
                        />
                    </div>
                    {data.image_url ? (
                        <div className={styles['image']}>
                            <img src={data.image_url} alt="Facebook" />
                        </div>
                    ) : null}
                    <div className={styles['footer']}>
                        <Timestamp time={data.pub_date} />
                        <img src={navigator.share ? share_button : copy_icon} alt="Share button" onClick={this.share} />
                    </div>
                </div>
            </div>
        );
    }
}

export default FacebookCard;
