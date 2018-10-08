import React, { Component } from 'react';
import Header from './Header';
import Backgrounds from './carousel/Backgrounds';
import NewsListContainer from './news-list/NewsListContainer';

class NewsfeedView extends Component {

    render() {
        return (
            <div>
                <Backgrounds />
                <Header />
                <NewsListContainer/>
            </div>
        );
    }
}

export default NewsfeedView;