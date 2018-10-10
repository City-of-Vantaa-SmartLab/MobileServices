import React, {Component} from 'react';
import NewsCardSwitcher from './news-card/NewsCardSwitcher';
import DateHeader from './../../DateHeader';
import styles from './news-card-group.module.scss';


class NewsCardGroup extends Component {

    render() {
        const cardGroup = this.props.data.map(item => (
            <NewsCardSwitcher key={item.id} type={item.source} data={item}/>
        ));

        return (
            <div>
                <DateHeader timestamp = {this.props.date} />
                <div className={styles['news-group']}>
                    {cardGroup}
                </div>
            </div>
        );
    }
}

export default NewsCardGroup;