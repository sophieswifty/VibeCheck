import React, { useState, useEffect, useLayoutEffect } from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/functions.js';
import { useAuth } from "../context/auth";

function Redirect(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();

  useEffect(() => {
    const history = props.history;
    const location = props.location;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/dashboard');
      }
      const access_token = getParamValues(location.hash);
      setAuthTokens(access_token);
      setLoggedIn(true);
      history.push('/dashboard');
    } catch (error) {
      history.push('/dashboard');
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