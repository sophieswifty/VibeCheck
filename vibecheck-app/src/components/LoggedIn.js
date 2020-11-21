import React, { useState, useEffect, useLayoutEffect } from 'react';
import NavigationBar from './NavigationBar';
import { useAuth } from "../context/auth";

function LoggedIn(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

    return (
        <div>
      <NavigationBar userData={props.userData} /> 
        </div>
    )
}

export default LoggedIn;
