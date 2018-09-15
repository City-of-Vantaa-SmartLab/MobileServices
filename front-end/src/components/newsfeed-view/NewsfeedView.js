import React, { Component } from 'react';
import Header from './Header';
import Backgrounds from './Backgrounds';

class NewsfeedView extends Component {

    render() {
        return (
            <div>
                <Backgrounds />
                <Header />
            </div>
        )
    }
}

export default NewsfeedView;