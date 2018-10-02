import React, { Component } from 'react';
import Header from './Header';
import Backgrounds from './carousel/Backgrounds';
import NewsList from './news-list/NewsList';

class NewsfeedView extends Component {

    render() {
        return (
            <div>
                <Backgrounds />
                <Header />
                <NewsList/>
            </div>
        );
    }
}

export default NewsfeedView;