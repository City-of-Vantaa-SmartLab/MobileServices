import React from 'react';
import Timestamp from './elements/Timestamp';
import styles from './social-media-card.module.scss';
import LinesEllipsis from 'react-lines-ellipsis';
import share_button from 'assets/images/share_button.svg';
import copy_icon from 'assets/images/copy_icon.svg';
import ToastNotification from './elements/ToastNotification';
import CardHOC from './CardHOC';

class FacebookCard extends React.Component {
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
        return (
            <div className={`${styles['social-media-card']} ${styles['facebook']}`}>
                <div className={styles['service-source']}>{data.source}</div>
                <div className={styles['content']}>
                    <div className={styles['content-source']}>
                        <img src={data.author_thumbnail} alt="Facebook thumbnail" />
                        <div>{data.author}</div>
                    </div>
                    <div className={styles['description']} ref={this.descriptionRef}>
                        <LinesEllipsis
                            text={data.description}
                            maxLine={this.props.descriptionMaxLinesLimit ? 1000 : 4}
                            ellipsis="... more"
                            trimRight
                            basedOn="letters"
                        />
                    </div>
                    {data.image_url ? (
                        <div className={styles['image']}>
                            <img src={data.image_url} alt="Facebook" />
                        </div>
                    ) : null}
                    <div className={styles['footer']}>
                        <Timestamp time={data.pub_date} />
                        <img
                            src={navigator.share ? share_button : copy_icon}
                            alt="Share button"
                            onClick={() => this.props.handleClick(data.author, data.description)}
                        />
                    </div>
                </div>
                {this.props.showNotification && <ToastNotification text="Copied to clipboard" />}
            </div>
        );
    }
}

export default CardHOC(FacebookCard);
