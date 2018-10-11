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
        id: 3,
        author: 'Author / page headline',
        title:
            'Trump decides to resign from office after  scandel debacle now this is even more content that can be occupied here',
        source: 'vantaansanomat.fi',
        img: pic,
        timestamp: 1537284959619,
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
    {
        id: 6,
        author: 'authorname',
        title: 'second twitter card',
        thumbnail: 'https://pbs.twimg.com/profile_images/559709902990348288/NwYEyKfg_400x400.jpeg',
        source: 'twitter',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: pic,
        timestamp: 1537174800000,
        userhandle: 'authorname',
    },
    {
        id: 7,
        author: 'authorname',
        title: 'third basic news feed card',
        source: 'vantaansanomat.fi',
        img: pic,
        timestamp: 1537174800000,
    },
    {
        id: 8,
        author: 'authorname',
        thumbnail: 'https://pbs.twimg.com/profile_images/559709902990348288/NwYEyKfg_400x400.jpeg',
        title: 'rubbish facebook card',
        description:
            'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        source: 'facebook',
        img: pic,
        timestamp: 1540283958899,
    },
    {
        id: 9,
        author: 'authorname',
        thumbnail: 'https://pbs.twimg.com/profile_images/559709902990348288/NwYEyKfg_400x400.jpeg',
        title: 'some more basic news feed',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        source: 'facebook',
        img: pic,
        timestamp: 1537283957618,
    },
    {
        id: 10,
        author: 'authorname',
        thumbnail: 'https://pbs.twimg.com/profile_images/559709902990348288/NwYEyKfg_400x400.jpeg',
        title: 'some more more basic news feed',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        source: 'facebook',
        img: pic,
        timestamp: 1537283957618,
    },
    {
        id: 11,
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
        id: 12,
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
        id: 13,
        author: 'authorname',
        thumbnail: 'https://pbs.twimg.com/profile_images/559709902990348288/NwYEyKfg_400x400.jpeg',
        title: 'rubbish facebook card',
        description:
            'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        source: 'facebook',
        img: pic,
        timestamp: 1540283958899,
    },
    {
        id: 14,
        author: 'authorname',
        thumbnail: 'https://pbs.twimg.com/profile_images/559709902990348288/NwYEyKfg_400x400.jpeg',
        title: 'rubbish facebook card',
        description:
            'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        source: 'facebook',
        img: pic,
        timestamp: 1540283958899,
    },
];

class NewsList extends Component {
    constructor(props) {
        super(props);

        this.newsFeedRef = React.createRef();
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > this.newsFeedRef.current.offsetTop) {
            Object.keys(this.fixedPosition).forEach((value) => {
                this.newsFeedRef.current.style[value] = this.fixedPosition[value];
            });
            this.containerRef.current.style['overflow'] = 'scroll';
        }
    };

    fixedPosition = {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100%',
    };

    render() {
        const newsfeed = _.chain(dummyfeed)
            .groupBy((item) => formatDate(item.timestamp))
            .map((item, date) => <NewsCardGroup key={date} date={date} data={item} />)
            .value();

        return (
            <div className={styles['newsfeed']} ref={this.newsFeedRef}>
                <div className={styles['container']} ref={this.containerRef}>
                    {newsfeed}
                </div>
            </div>
        );
    }
}

export default NewsList;
