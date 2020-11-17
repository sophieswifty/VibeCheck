import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions.js';
import { useAuth } from "../context/auth";

function Redirect(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();


  useEffect(() => {
    const history = props.history;
    const location = props.location;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/');
      }
      const access_token = getParamValues(location.hash);
      setAuthTokens(access_token);
      setLoggedIn(true);
      history.push('/');
    } catch (error) {
      history.push('/');
      setIsError(true);
    }
  }, []);

  // Use retrieved token to make axios request for user data to set user and pass here?

  if (isLoggedIn) {
    console.log("logged in success redirect to dash");
    return <Redirect to="/dashboard" />
  }

  if (isError) {
    console.log("error logging in");
  }

  // If log in was unsuccessful, need to redirect to Error page.
  return (
    null 
  );
}

export default Redirect;