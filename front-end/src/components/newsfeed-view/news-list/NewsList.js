import React, {Component} from 'react';
import  _  from 'lodash';
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        source: 'instagram',
        img: pic,
        timestamp: 1537283957618,
    },
    {
        id: 2,
        author: 'authorname',
        title: 'one more basic news feed card',
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: pic,
        timestamp: 1537174800000,
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        source: 'facebook',
        img: pic,
        timestamp: 1537283957618,
    }
];



class NewsList extends Component {

    componentWillMount() {
        this.props.onRequest(); 
    }

    render() {
        if (this.props.feed) {
            const newsfeed = _.chain(this.props.feed)
                .groupBy((item) => (formatDate(item.pub_date)))
                .map((item, date) => (<NewsCardGroup date={date} data={item} />))
                .value();

            return (
                <div className={styles['container']}>
                    <div className={styles['newsfeed']}>
                        {newsfeed}
                    </div>
                </div>
            );
            
        }
        else return;
    }
}




export default NewsList;