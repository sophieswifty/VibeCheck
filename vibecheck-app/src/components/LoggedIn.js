import React, { useState, useEffect, useLayoutEffect } from 'react';
import NavigationBar from './NavigationBar';

function LoggedIn(props) {
    return (
        <div>
      <NavigationBar username={props.username} loadingData={props.loadingData} /> 
        </div>
    )
}

export default LoggedIn;
