//import 'react-bulma-components/dist/react-bulma-components.min.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Quiz } from './pages/Quiz';
import { Statistics } from './pages/Statistics';
import { Custom } from './pages/Custom';
import { ErrorPage } from './pages/ErrorPage';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbo } from './components/Jumbo';
import { axios } from 'axios';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbo />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/statistics" component={Statistics} />
              <Route path="/custom" component={Custom} />
              <Route component={ErrorPage} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
