import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { doItAll, setAccessToken, practiceWaiting, foo } from './API/spotifyAPI';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
