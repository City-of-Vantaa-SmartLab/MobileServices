import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';

import CookieView from './cookie/CookieView';
import NewsfeedView from './newsfeed-view/NewsfeedView';
import ResourcesView from './resources-view/ResourcesView';
import SettingsView from './settings-view/SettingsView';
import NavigationPanel from './navigation/NavigationPanel';
import { SOURCES_FETCH_REQUEST } from 'actions/actionTypes';

class App extends Component {
    componentDidMount() {
        this.props.onLoad();
    }
    render() {
        return (
            <div>
                <CookieView cookies={this.props.cookies} />
                <Switch>
                    <Route path="/newsfeed" component={NewsfeedView} />
                    <Route path="/resources" component={ResourcesView} />
                    <Route path="/settings" component={SettingsView} />
                    <Route exact path="/" render={() => <Redirect to="/newsfeed" />} />
                </Switch>
                <NavigationPanel />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            dispatch({ type: SOURCES_FETCH_REQUEST });
        },
    };
};

const AppContainer = connect(
    null,
    mapDispatchToProps
)(App);

export default withCookies(AppContainer);
