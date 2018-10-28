import React, { Component } from 'react';
import groupBy from 'lodash/groupBy';
import NewsCardGroup from './card-group/NewsCardGroup';
import styles from './news-list.module.scss';
import { startOfDay } from 'date-fns';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.newsFeedRef = React.createRef();
        this.NewsFeedContainerScrollingEvent = new Event('NewsFeedContainerScrolling');
    }

    componentDidMount() {
        this.newsFeedRef.current.scrollTop = this.props.scroll;
        if (this.props.feed.length === 0) {
            this.props.onRequest();
        }
        window.addEventListener('scroll', this.handleOuterScroll);
        this.newsFeedRef.current.addEventListener('scroll', this.handleFeedScroll);
    }

    componentWillUnmount() {
        if (this.props.activated) {
            this.props.saveScrollPosition(this.newsFeedRef.current.scrollTop);
            this.newsFeedRef.current.removeEventListener('scroll', this.handleFeedScroll);
        }
        window.removeEventListener('scroll', this.handleOuterScroll);
    }

    handleOuterScroll = () => {
        const top = window.scrollY > this.newsFeedRef.current.offsetTop;
        if (top && !this.props.activated) {
            this.props.feedActivated();
        }
    };

    handleFeedScroll = () => {
        if (this.props.activated) {
            window.dispatchEvent(this.NewsFeedContainerScrollingEvent);
            const bottom =
                this.newsFeedRef.current.scrollHeight - this.newsFeedRef.current.scrollTop <=
                this.newsFeedRef.current.clientHeight;
            if (bottom) {
                this.props.onRequest();
            }
        }
    };

    // dispatchCustomEvent = () => {
    //     window.dispatchEvent(this.NewsFeedContainerScrollingEvent);
    // }

    fixedPosition = {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
        overflow: 'scroll',
    };

    render() {
        const grouped = groupBy(this.props.feed, (item) => startOfDay(item.pub_date));
        const newsfeed = Object.keys(grouped).map((date) => (
            <NewsCardGroup key={date} date={date} data={grouped[date]} />
        ));
        return (
            <div
                className={styles['newsfeed']}
                style={this.props.activated ? this.fixedPosition : null}
                ref={this.newsFeedRef}
            >
                {newsfeed}
            </div>
        );
    }
}

export default NewsList;
