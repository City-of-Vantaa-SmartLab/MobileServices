import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './navigation.module.scss';

class NavigationPanel extends Component {
    clicked = (event) => {
        for (let element of event.target.parentNode.children) {
            if (element === event.target) {
                element.className = 'active';
            } else {
                element.className = 'inactive';
            }
        }
    };

    render() {
        let { i18n } = this.props;

        return (
            <div className={styles.navigation}>
                <NavLink exact to="/newsfeed" onClick={this.clicked}>
                    {i18n.navigation.news}
                </NavLink>
                <NavLink exact to="/resources" onClick={this.clicked}>
                    {i18n.navigation.links}
                </NavLink>
                <NavLink exact to="/settings" onClick={this.clicked}>
                    {i18n.navigation.settings}
                </NavLink>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    i18n: state.i18n,
});

export default connect(mapStateToProps)(NavigationPanel);
