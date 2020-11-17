import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

function PrivateRoute({ component: Component, ...rest }) {
    const { authTokens } = useAuth();

//  Example of what authTokens looks like after it's set (look at devtools if you want to see it irl): 
//    {
//     authTokens: 'some token string',
//     setAuthTokens: func
// ```}

 return (
    <Route
      {...rest}
      render={props =>
        authTokens ? (
          <Component {...props} />
        ) : (
          <Redirect to="/error" />
        )
      }
    />
  );
}

export default PrivateRoute;

// change redirect link if we want to redirect unlogged in user to a diff page.
// using our hook and pulling whatever value is stored in our AuthContext