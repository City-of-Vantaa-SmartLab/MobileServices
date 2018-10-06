import React, {Component} from 'react';
import NewsCardSwitcher from './news-card/NewsCardSwitcher';
import DateHeader from './../../DateHeader';


class NewsCardGroup extends Component {

    render() {
        const cardGroup = this.props.data.map(item => (
            <NewsCardSwitcher type = {item.source} data = {item}/>
        ));

        return (
            <div className = "container">
                <DateHeader timestamp = {this.props.date} />
                <div className="newsgroup">
                    {cardGroup}
                </div>
            </div>
        );
    }
}

export default NewsCardGroup;