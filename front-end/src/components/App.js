import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NewsfeedView from './newsfeed-view/NewsfeedView';
import ResourcesView from './resources-view/ResourcesView';
import SettingsView from './settings-view/SettingsView';
import NavigationPanel from './navigation/NavigationPanel';
import AppLoader from './app-loader';
import { SOURCES_FETCH_REQUEST, FACTS_FETCH_REQUEST } from 'actions/actionTypes';

class App extends Component {
    componentDidMount() {
        this.props.onLoad();
    }
    render() {
        return (
            <div>
                <AppLoader />
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
            dispatch({ type: FACTS_FETCH_REQUEST });
        },
    };
};

const AppContainer = connect(
    null,
    mapDispatchToProps
)(App);

export default withRouter(AppContainer);
