import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {authorize, doItAll} from './API/spotifyAPI';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const filter = {
//   acousticness_low: 0,
//   acousticness_high: 0.25,
//   danceability_low: 0.4,   
//   danceability_high: 0.65,  
//   duration_ms_low: 0,
//   duration_ms_high: 600000,
//   energy_low: 0.5,
//   energy_high: 0.75,
//   instrumentalness_low: 0,
//   instrumentalness_high: 0.25,
//   key: 0,
//   liveness_low: 0,
//   liveness_high: 0.25,
//   loudness_low: -8,  
//   loudness_high: 0,    
//   mode: 1,
//   speechiness_low: 0,
//   speechiness_high: 0.25,
//   tempo_low: 60,
//   tempo_high: 140,
//   time_signature: 4,
//   valence_low: 0.5,
//   valence_high: 0.75
// };

// doItAll(filter);