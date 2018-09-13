import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavigationPanel extends Component {

    render() {

        return (
            <div className='navigation'>
                <NavLink to='/newsfeed'>Newsfeed</NavLink>
                <NavLink to='/resources'>Resources</NavLink>
                <NavLink to='/Settings'>Settings</NavLink>
            </div>
        )
    }
}

export default NavigationPanel;