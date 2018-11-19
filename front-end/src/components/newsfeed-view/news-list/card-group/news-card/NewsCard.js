import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './news-card.module.scss';
import LinesEllipsis from 'react-lines-ellipsis';
import img from 'assets/images/Vantaa-logo.svg';
import share_button from 'assets/images/share_button.svg';
import copy_icon from 'assets/images/copy_icon.svg';
import ToastNotification from './elements/ToastNotification';
import CardHOC from './CardHOC';

class NewsCard extends React.Component {
    constructor(props) {
        super(props);

        this.descriptionRef = React.createRef();
    }

    componentDidMount() {
        this.props.moreTextClickListener(this.descriptionRef);
    }

    render() {
        let { data } = this.props;

        return (
            <div className={styles['news-card']}>
                <div className={styles['source']}>{data.source}</div>
                <div className={styles['content']}>
                    <div
                        className={styles['image']}
                        style={{ backgroundImage: data.image_url ? `url(http://${data.image_url})` : `url(${img})` }}
                    />
                    <div className={styles['title']}>
                        <div>
                            <LinesEllipsis text={data.title} maxLine="3" ellipsis="..." trimRight basedOn="letters" />
                        </div>
                    </div>
                </div>
                <div ref={this.descriptionRef} className={styles['description']}>
                    <LinesEllipsis
                        text={data.description}
                        maxLine={this.props.descriptionMaxLinesLimit ? 1000 : 6}
                        ellipsis="... more"
                        trimRight
                        basedOn="letters"
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
