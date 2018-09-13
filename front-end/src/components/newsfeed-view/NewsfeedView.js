import React, { Component } from 'react';
import NavigationPanel from './../navigation/NavigationPanel';
import Frontpage from './frontpage/Frontpage';


class NewsfeedView extends Component {
    

    render() {
        return (
            <div>
            <Frontpage/>
            <NavigationPanel/>
            </div>
        )
    }
}

export default NewsfeedView;