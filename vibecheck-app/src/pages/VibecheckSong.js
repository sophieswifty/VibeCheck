import React from 'react';
import {Heading, Form, Button, Tile, Box, Hero} from 'react-bulma-components';
import Autocomplete from '../components/Autocomplete';
import SongStatistics from '../components/SongStatistics';
import { getTrackData } from '../API/spotifyAPI';

import PublicPlaylist from '../components/PublicPlaylists'

import './VibecheckSong.css';


export default class VibecheckSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearched: false,
            songObject: {},
            songMetrics: {},
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(songObject) {
        console.log(songObject);
        this.setState({songObject: songObject});
        this.setState({isSearched: false});
        getTrackData(songObject.id).then( (r) => {
            this.setState({songMetrics: r});
            this.setState({isSearched: true});
        }).catch( (error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <React.Fragment>
                <Heading>
                    Vibecheck a song
                </Heading>
                <Autocomplete searchType={"song"} onSubmit={this.handleSubmit}/> 
                
                {this.state.isSearched &&
                    <SongStatistics 
                        albumCover={this.state.songObject.album.images[0].url} 
                        songName={this.state.songObject.name} 
                        songMetrics={this.state.songMetrics}
                    />
                }
            </React.Fragment>);
    }
}