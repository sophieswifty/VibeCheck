import React, {useContext, useState} from 'react';
import { Container, Heading, Tile, Section, Image, Box } from 'react-bulma-components';
import UserDataContext from '../context/userdata';
import TopArtistList from '../components/TopArtistList';
import StatisticsBox from '../components/StatisticsBox';
import { getUserTopTracks } from '../API/spotifyAPI';
import './Statistics.css'
import StatisticsBox from '../components/StatisticsBox'

function Statistics() {
    const userData = useContext(UserDataContext);
    console.log("here");
    return (
        <div>
         <StatisticsBox userData={userData}></StatisticsBox>
        </div>
    )
}

export default Statistics