import React, { Component } from 'react';
import _ from 'lodash';
import { formatDate } from 'utils/utils';
import pic from 'assets/images/cutiepie.jpg';
import NewsCardGroup from './card-group/NewsCardGroup';
import styles from './news-list.module.scss';

const dummyfeed = [
    {
        id: 1,
        author: 'authorname',
        thumbnail: 'https://pbs.twimg.com/profile_images/559709902990348288/NwYEyKfg_400x400.jpeg',
        title: 'some basic news feed',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        source: 'instagram',
        img: pic,
        timestamp: 1537283957618,
        likes: 34,
    },
    {
        id: 2,
        author: 'Author / page headline',
        title:
            'Trump decides to resign from office after  scandel debacle now this is even more content that can be occupied here',
        source: 'vantaansanomat.fi',
        img: pic,
        timestamp: 1537283957618,
    },
    {
        id: 3,
        author: 'authorname',
        title: 'some basic news feed',
        thumbnail: 'https://pbs.twimg.com/profile_images/559709902990348288/NwYEyKfg_400x400.jpeg',
        source: 'twitter',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: pic,
        timestamp: 1537174800000,
        userhandle: 'authorname',
    },
    {
        id: 4,
        author: 'authorname',
        title: 'one more basic news feed card',
        source: 'vantaansanomat.fi',
        img: pic,
        timestamp: 1537174800000,
    },
    {
        id: 5,
        author: 'authorname',
        thumbnail: 'https://pbs.twimg.com/profile_images/559709902990348288/NwYEyKfg_400x400.jpeg',
        title: 'some basic news feed',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        source: 'facebook',
        img: pic,
        timestamp: 1537283957618,
    },
];

class NewsList extends Component {
    constructor(props) {
        super(props);

        this.newsFeedRef = React.createRef();
    }

    componentDidMount() {
        this.props.onRequest();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const bottom = this.newsFeedRef.current.getBoundingClientRect().bottom <= window.innerHeight;
        if (bottom) {
            this.props.onRequest();
        }
    };

    render() {
        console.log(this.props.feed);
        if (this.props.feed) {
            const newsfeed = _.chain(this.props.feed)
                .groupBy((item) => formatDate(item.pub_date))
                .map((item, date) => <NewsCardGroup key={date} date={date} data={item} />)
                .value();

            return (
                <div className={styles['newsfeed']} ref={this.newsFeedRef}>
                    {newsfeed}
                </div>
            );
        } else return;
    }
}

export default NewsList;
