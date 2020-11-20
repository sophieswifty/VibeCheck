import React from 'react';
import {Heading, Form, Button, Hero} from 'react-bulma-components';
import Autocomplete from '../components/Autocomplete';
import SongStatistics from '../components/SongStatistics';

export default class VibecheckSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songMetrics: {
                "search": '',
                "key" : 5,
                "mode" : 0,
                "time_signature" : 4,
                "acousticness" : 0.514,
                "danceability" : 0.735,
                "energy" : 0.578,
                "instrumentalness" : 0.0902,
                "liveness" : 0.159,
                "loudness" : -11.840,
                "speechiness" : 0.0461,
                "valence" : 0.624,
                "tempo" : 98.002,
            }
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(songName) {
        // Use track id to get track data here
        let nsongMetrics = {...this.state.songMetrics};
        nsongMetrics.search = songName;
        this.setState({songMetrics: nsongMetrics});
    }

    render() {
        return (
            <React.Fragment>
                <Heading>
                    Vibecheck a song {this.state.search}
                </Heading>
                <Autocomplete onSubmit={this.handleSubmit}/> 
                {this.state.songMetrics.search.length > 0 &&
                    <SongStatistics songMetrics={this.state.songMetrics}/>
                }
            </React.Fragment>);
    }
}