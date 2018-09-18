import React, {Component} from 'react';
import NewsCardSwitcher from './news-card/NewsCardSwitcher';


class NewsCardGroup extends Component {

    render() {
        console.log(this.props.date);
        return (
            <div className = "container">
                <h3>{this.props.date}</h3>
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