import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './news-card.module.scss';
import ExpandableContent from './elements/ExpandableContent';
import img from 'assets/images/vantaa-logo.svg';
import share_button from 'assets/images/share_button.svg';
import copy_icon from 'assets/images/copy_icon.svg';
import ToastNotification from './elements/ToastNotification';
import CardHOC from './CardHOC';

class NewsCard extends React.Component {
    render() {
        let { data } = this.props;
        console.log(data);
        return (
            <div className={styles['news-card']}>
                <div className={styles['source']}>{data.source}</div>
                <div className={styles['content']}>
                    <div className={styles['image']} style={{ backgroundImage: `url(${img})` }} />
                    <div className={styles['title']}>
                        <span>Author / page headline</span>
                        <br />
                        <div>{data.title}</div>
                    </div>
                </div>
                <div className={styles['description']}>
                    <ExpandableContent
                        maxLine={6}
                        description={data.description}
                        ellipsis="..."
                        lineHeight={1.21}
                        className={styles['content-text']}
                        ellipsisClickable={false}
                    />
                </div>
                <div className={styles['footer']}>
                    <Timestamp time={data.pub_date} />
                    <img
                        src={navigator.share ? share_button : copy_icon}
                        alt="Share button"
                        onClick={() => this.props.handleClick(data.source, data.title)}
                    />
                </div>
                {this.props.showNotification && <ToastNotification text="Copied to clipboard" />}
            </div>
        );
    }
}

export default CardHOC(NewsCard);
