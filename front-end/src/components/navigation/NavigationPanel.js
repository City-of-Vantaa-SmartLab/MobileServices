import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './navigation.module.scss';
import { withRouter } from 'react-router';

class NavigationPanel extends Component {
    render() {
        let { location, i18n } = this.props;

        return (
            <div className={styles.navigation}>
                <NavLink to="/newsfeed" className={`${location.pathname === '/newsfeed' ? 'active' : ''}`}>
                    {i18n.navigation.news}
                </NavLink>
                <NavLink to="/resources" className={`${location.pathname === '/resources' ? 'active' : ''}`}>
                    {i18n.navigation.links}
                </NavLink>
                <NavLink to="/settings" className={`${location.pathname === '/settings' ? 'active' : ''}`}>
                    {i18n.navigation.settings}
                </NavLink>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    i18n: state.i18n,
});

export default withRouter(connect(mapStateToProps)(NavigationPanel));
