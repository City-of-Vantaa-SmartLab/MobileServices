import React, {Component} from 'react';
import  _  from 'lodash';
import { formatDate } from 'utils/utils';
import pic from 'assets/images/cutiepie.jpg';
import './newslist.css';
import NewsCardGroup from './NewsCardGroup';

const dummyfeed = [
    {
        id: 1,
        title: 'some basic news feed',
        source: 'vantaa.fi',
        img: pic,
        timestamp: 1537283957618,
    },
    {
        id: 2,
        title: 'one more basic news feed card',
        source: 'vantaansanomat.fi',
        img: pic,
        timestamp: 1537283957618,
    },
    {
        id: 3,
        title: 'some basic news feed',
        source: 'vantaa.fi',
        img: pic,
        timestamp: 1537174800000,
    },
    {
        id: 4,
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
                <div className="newsfeed" style = {this.props.active ? {top: '50%'} : {}}>
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