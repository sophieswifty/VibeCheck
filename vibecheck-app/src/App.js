import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';
import Statistics from './pages/Statistics';
import ErrorPage from './pages/ErrorPage';
import VibecheckSong from './pages/VibecheckSong';
import VibecheckPlaylist from './pages/VibecheckPlaylist';

import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';

// Add any icons you want to use right here
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'; // import brand icons (needed for spotify logo)
library.add(fab)

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
        <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/statistics" component={Statistics} />
              <Route path="/vibecheck-song" component={VibecheckSong} />
              <Route path="/vibecheck-playlist" component={VibecheckPlaylist} />
              <Route component={ErrorPage} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

