import React from 'react';
import Timestamp from './elements/Timestamp';
import ExpandableContent from './elements/ExpandableContent';
import styles from './social-media-card.module.scss';
import share_button from 'assets/images/share_button.svg';
import copy_icon from 'assets/images/copy_icon.svg';
import ToastNotification from './elements/ToastNotification';
import CardHOC from './CardHOC';

class InstagramCard extends React.Component {
    render() {
        let { data } = this.props;
        return (
            <div className={`${styles['social-media-card']} ${styles['instagram']}`}>
                <div className={styles['service-source']}>{data.source}</div>
                <div className={styles['content']}>
                    <div className={styles['content-source']}>
                        <img src={data.author_thumbnail} alt="Instagram thumbnail" />
                        <div>{data.author}</div>
                    </div>
                    <div className={styles['image']}>
                        <img src={data.image_url} alt="Instagram" />
                    </div>
                    <div className={styles['description']}>
                        <div className={styles['likes']}>{data.likes} likes</div>
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
                        <img
                            src={navigator.share ? share_button : copy_icon}
                            alt="Share button"
                            onClick={() => this.props.handleClick(data.author, data.title)}
                        />
                    </div>
                </div>
                {this.props.showNotification && <ToastNotification text="Copied to clipboard" />}
            </div>
        );
    }
}

export default CardHOC(InstagramCard);
