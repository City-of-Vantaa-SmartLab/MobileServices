import React, {Component} from 'react';
import NewsCardSwitcher from './news-card/NewsCardSwitcher';
import DateHeader from './../DateHeader';


class NewsCardGroup extends Component {

    render() {
        return (
            <div className = "container">
                <DateHeader date = {this.props.date} />
                <div className="newsgroup">
                {
                    this.props.data.map(item => (<NewsCardSwitcher type = {item.source} data = {item}/>))
                }
                </div>
            </div>
        );
    }
}

export default NewsCardGroup;