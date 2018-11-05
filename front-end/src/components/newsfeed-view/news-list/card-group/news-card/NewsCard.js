import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './news-card.module.scss';
import LinesEllipsis from 'react-lines-ellipsis';
import img from 'assets/images/vantaa-logo.svg';
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
        /*
        this.observer = new MutationObserver(() => {
            this.moreText = this.descriptionRef.current.getElementsByClassName('LinesEllipsis-ellipsis')[0];
            if (this.moreText) {
                this.moreText.addEventListener('click', () => {
                    this.setState({ descriptionMaxLines: 1000 });
                });
            }
            this.observer.disconnect();
        });
        this.observer.observe(this.descriptionRef.current, { attributes: false, childList: true, subtree: true });
        */
        this.props.moreTextClickListener(this.descriptionRef);
    }

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
