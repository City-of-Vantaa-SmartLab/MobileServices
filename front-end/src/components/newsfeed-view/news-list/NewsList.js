import React, {Component} from 'react';
import  _  from 'lodash';
import { formatDate } from 'utils/utils';
import pic from 'assets/images/cutiepie.jpg';
import './newslist.css';
import NewsCardGroup from './NewsCardGroup';

const dummyfeed = [
    {
        id: 1,
        author: 'authorname',
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
    }
];



class NewsList extends Component {

    render() {
        return (
            <div className = "container">
                <div className="newsfeed">
                {
                    _.chain(dummyfeed)
                        .groupBy((item) => (formatDate(item.timestamp)))
                        .map((item, date) => (<NewsCardGroup date = {date} data = {item} />))
                        .value()
                }
                </div>
            </div>
        );
    }
}

export default NewsList;