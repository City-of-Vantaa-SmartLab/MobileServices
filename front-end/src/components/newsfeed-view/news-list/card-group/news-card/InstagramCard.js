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

        this.state = {
            descriptionMaxLines: 3,
        };
        this.descriptionRef = React.createRef();
    }

    componentDidMount() {
        this.observer = new MutationObserver(() => {
            this.moreText = this.descriptionRef.current.getElementsByClassName('LinesEllipsis-ellipsis')[0];
            if (this.moreText) {
                this.moreText.addEventListener('click', () => {
                    this.setState({ descriptionMaxLines: 1000 });
                });
            }

            this.contentNode = this.descriptionRef.current.getElementsByClassName('LinesEllipsis')[0];
            this.contentNode.childNodes[0].textContent = this.contentNode.childNodes[0].textContent.replace(
                /\xa0/g,
                ''
            );

            this.observer.disconnect();
        });
        this.observer.observe(this.descriptionRef.current, { attributes: false, childList: true, subtree: true });
    }

    componentDidUpdate() {
        if (this.contentNode)
            this.contentNode.childNodes[0].textContent = this.contentNode.childNodes[0].textContent.replace(
                /\u00a0/g,
                ''
            );
    }

    render() {
        let { data } = this.props;
        let descriptionString = '\xA0'.repeat(data.author.length) + data.description;

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
                    <div className={styles['description']} ref={this.descriptionRef}>
                        <div className={styles['likes']}>{data.likes} likes</div>
                        <div>
                            <span>
                                <b>{data.author} </b>
                            </span>
                            <LinesEllipsis
                                text={descriptionString}
                                maxLine={this.state.descriptionMaxLines}
                                ellipsis="... more"
                                trimRight
                                basedOn="letters"
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
