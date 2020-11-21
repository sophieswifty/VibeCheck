import React, { Component, useState } from 'react';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Statistics from './pages/Statistics';
import ErrorPage from './pages/ErrorPage';
import VibecheckSong from './pages/VibecheckSong';
import VibecheckPlaylist from './pages/VibecheckPlaylist';
import Redirect from './pages/Redirect';
import LoggedIn from './components/LoggedIn';

import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';

// Context 
import { AuthContext } from './context/auth';
import PrivateRoute from './components/PrivateRoute';

// Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'; // import brand icons (needed for spotify logo)

import { getUserData, setAccessToken } from './API/spotifyAPI';
library.add(fab)




function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("spotify_auth_state"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  const [userData, setUserData] = useState("");

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  if (authTokens) {
    setAccessToken(authTokens.access_token);
    getUserData().then(data => {
      setUserData(data);
      console.log(data);
    });
  }
  
  // Context set up following this explanation: https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
  // any component using our AuthContext can now get tokens and set the tokens

  return (
    <React.Fragment>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
          {/* { !authTokens && <Home /> } */}
          { authTokens && <LoggedIn userData={userData}/> }
          <Layout>
            <Switch>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/quiz" component={Quiz} />
              <PrivateRoute path="/statistics" component={Statistics} />
              <PrivateRoute path="/vibecheck-song" component={VibecheckSong} />
              <PrivateRoute path="/vibecheck-playlist" component={VibecheckPlaylist} />
              <Route path="/redirect" component={Redirect} />
              <Route exact path="/" component={Home} />
            </Switch>
          </Layout>
        </Router>
      </AuthContext.Provider>
    </React.Fragment>
  );

}

export default App;