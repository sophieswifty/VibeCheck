import React from 'react';
import {Heading, Form, Button, Tile, Box, Hero} from 'react-bulma-components';
import Autocomplete from '../components/Autocomplete';
import SongStatistics from '../components/SongStatistics';
import { getTrackData } from '../API/spotifyAPI';

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
        this.setState({songObject: songObject});
        this.setState({isSearched: false});
        getTrackData(songObject.id).then( (r) => {
            this.setState({songMetrics: r});
            this.setState({isSearched: true});
        }).catch( (error) => {
            alert("Something went wrong. Try again.");
        });
    }

    render() {
        return (
            <React.Fragment>
                 <div className="vibecheck-page-container">
                    <Heading>
                        Vibify a song
                    </Heading>
                    <Autocomplete searchType={"song"} onSubmit={this.handleSubmit}/> 
                    
                    {this.state.isSearched &&
                        <SongStatistics 
                            albumCover={this.state.songObject.album.images[0].url} 
                            artistName={this.state.songObject.artists[0].name}
                            songName={this.state.songObject.name} 
                            songMetrics={this.state.songMetrics}
                            songURL={this.state.songObject.external_urls.spotify}
                        />
                    }
                </div>
            </React.Fragment>);
    }
}