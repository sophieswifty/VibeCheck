import React, {useContext, useState} from 'react';
import { Container, Heading, Tile, Section, Image, Box } from 'react-bulma-components';
import UserDataContext from '../context/userdata';
import TopArtistList from '../components/TopArtistList'
import { getUserTopTracks } from '../API/spotifyAPI'
import './Statistics.css'


function Statistics() {


    return (
        <div>
            {/* <StatisticsBox userData={userData}></StatisticsBox> */}
        </div>
    )
}

export default Statistics
