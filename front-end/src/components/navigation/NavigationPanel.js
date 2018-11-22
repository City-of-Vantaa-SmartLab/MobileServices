import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './navigation.module.scss';
import { withRouter } from 'react-router';
import { FEED_ACTIVATED } from 'actions/actionTypes';

class NavigationPanel extends Component {
    render() {
        let { location, i18n, onClick, activated } = this.props;

        return (
            <div className={styles.navigation}>
                <NavLink
                    onClick={(e) => {
                        if (!activated) {
                            onClick();
                        }
                    }}
                    to="/newsfeed"
                    className={`${location.pathname === '/newsfeed' ? 'active' : ''}`}
                >
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
    activated: state.activated,
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch({ type: FEED_ACTIVATED });
        },
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(NavigationPanel)
);
