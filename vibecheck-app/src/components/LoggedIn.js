import React, { useState, useEffect, useLayoutEffect } from 'react';
import NavigationBar from './NavigationBar';
import { useAuth } from "../context/auth";

function LoggedIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const token = useAuth();

  // retrieve user data

    return (
        <div>
      <NavigationBar /> 
        </div>
    )
}

export default LoggedIn;
