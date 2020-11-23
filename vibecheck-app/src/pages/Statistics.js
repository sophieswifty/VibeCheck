import React, {useContext, useState} from 'react';
import UserDataContext from '../context/userdata';
import StatisticsBox from '../components/StatisticsBox';
import { getUserTopTracks } from '../API/spotifyAPI';
import './Statistics.css'

function Statistics() {
    const userData = useContext(UserDataContext);
    return (
        <div>
         <StatisticsBox userData={userData}></StatisticsBox>
        </div>
    )
}

export default Statistics