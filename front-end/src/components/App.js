import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from "./../assets/images/logo.svg";
import "./../assets/stylesheets/App.css";

import NewsfeedView from './newsfeed-view/NewsfeedView';
import ResourcesView from './resources-view/ResourcesView';
import SettingsView from './settings-view/SettingsView';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route path="/newsfeed" component={NewsfeedView} />
              <Route path="/resources" component={ResourcesView} />
              <Route path="/settings" component={SettingsView} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
