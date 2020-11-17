import React from "react";
import { useAuth } from "../context/auth";
import { Button } from 'react-bulma-components';

function Logout() {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
    console.log("log out button hit");
  }

  return (
    <div>
      <Button color="primary" onClick={logOut}>Log out</Button>
    </div>
  );
}

export default Logout;