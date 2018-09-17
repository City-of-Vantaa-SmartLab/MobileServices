import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
// import logo from "./../assets/images/logo.svg";
import "./App.css";

import NewsfeedView from './newsfeed-view/NewsfeedView';
import ResourcesView from './resources-view/ResourcesView';
import SettingsView from './settings-view/SettingsView';
import NavigationPanel from "./navigation/NavigationPanel";

class App extends Component {
  render() {
    return (
      <div>
          Hello
          <Switch>
            <Route path="/newsfeed" component={NewsfeedView} />
            <Route path="/resources" component={ResourcesView} />
            <Route path="/settings" component={SettingsView} />
            <Route exact path="/" render={() => (<Redirect to="/newsfeed"/>)} />
          </Switch>
          <NavigationPanel />
      </div>
    );
  }
}

export default App;
