import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavigationIcon from '../navigation-icon/NavigationIcon';
import './navigation.scss';

class NavigationPanel extends Component {
    
    render() {

        return (
            <div className='navigation'>
                <NavLink to='/newsfeed'><NavigationIcon iconName="newsIcon" iconText="NEWS FEED" /></NavLink>
                <NavLink to='/resources'><NavigationIcon iconName="resourcesIcon" iconText="RESOURCES" /></NavLink>
                <NavLink to='/Settings'><NavigationIcon iconName="preferencesIcon" iconText="PREFERENCES" /></NavLink>
            </div>
        );
    }
}

export default NavigationPanel;