import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationIcon from './navigation-icon/NavigationIcon';
import styles from './navigation.module.scss';


class NavigationPanel extends Component {
    
    render() {
        let {i18n} = this.props;

        return (
            <div className={styles.navigation}>
                <NavLink to='/newsfeed'><NavigationIcon iconName="newsIcon" iconText={i18n.navigation.news} /></NavLink>
                <NavLink to='/resources'><NavigationIcon iconName="resourcesIcon" iconText={i18n.navigation.links} /></NavLink>
                <NavLink to='/Settings'><NavigationIcon iconName="preferencesIcon" iconText={i18n.navigation.settings} /></NavLink>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    i18n: state.i18n,
});

export default connect(
    mapStateToProps
)(NavigationPanel);
