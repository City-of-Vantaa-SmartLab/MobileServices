import React from 'react';
import Timestamp from './elements/Timestamp';
import LinesEllipsis from 'react-lines-ellipsis';
import styles from './social-media-card.module.scss';
import share_button from 'assets/images/share_button.svg';
import copy_icon from 'assets/images/copy_icon.svg';
import ToastNotification from './elements/ToastNotification';
import CardHOC from './CardHOC';

class InstagramCard extends React.Component {
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
            <div className={`${styles['social-media-card']} ${styles['instagram']}`}>
                <div className={styles['service-source']}>{data.source}</div>
                <div className={styles['content']}>
                    <a href={data.page_link} className={styles['content-source']}>
                        <img src={data.author_thumbnail} alt="Instagram thumbnail" />
                        <div>{data.author}</div>
                    </a>
                    <div className={styles['image']}>
                        <img src={data.image_url} alt="Instagram" />
                    </div>
                    <div className={styles['description']} ref={this.descriptionRef}>
                        <div className={styles['likes']}>{data.likes} likes</div>
                        <div>
                            <span>
                                <b>{data.author} </b>
                            </span>
                            <LinesEllipsis
                                text={data.description}
                                maxLine={this.props.descriptionMaxLinesLimit ? 1000 : 2}
                                ellipsis="... more"
                                trimRight
                                basedOn="words"
                                component="span"
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
