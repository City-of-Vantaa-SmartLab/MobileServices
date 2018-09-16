import React, {Component} from 'react';
import NewsCardSwitcher from './news-card/NewsCardSwitcher';
import pic from 'assets/images/cutiepie.jpg'

const dummyfeed = [
    {
        id: 1,
        title: 'is there even a title for instagram?',
        source: 'instagram',
        img: pic,
        timestamp: 1360002924000
    },
    {
        id: 2,
        title: 'what is the layout for facebook card?',
        source: 'facebook',
        img: pic,
        timestamp: 1460002924000
    },
    {
        id: 3,
        title: 'some basic news feed',
        source: 'vantaa.fi',
        img: pic,
        timestamp: 1370003924000
    },
    {
        id: 4,
        title: 'one more basic news feed card',
        source: 'vantaansanomat.fi',
        img: pic,
        timestamp: 1535002924000
    }
]



class NewsList extends Component {
    position = {};
    componentWillReceiveProps() {
        this.position = this.props.active ? {position: 'relative'} : {}
    }
    
    render() {
        return (
            <div className="newsfeed container" style = {this.position}>
            {
                dummyfeed.map(item => (<NewsCardSwitcher type = {item.source} data = {item}/>))
            }
            </div>
        )
    }
}

export default NewsList;