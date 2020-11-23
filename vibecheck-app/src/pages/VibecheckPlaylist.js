import React from 'react';
import {Heading, Form, Button, Hero} from 'react-bulma-components';
import Autocomplete from '../components/Autocomplete';
import PlaylistStatistics from '../components/PlaylistStatistics';
import { getPlaylistItems, getTracksData } from '../API/spotifyAPI';

export default class VibecheckPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearched: false,
            playlistObject: {},
            playlistItems: [],
            playlistItemsMetrics: [],
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getTrackIds = this.getTrackIds.bind(this);
    }

    handleSubmit(playlistObject) {
        if (this.state.isSearched) {
            this.setState({isSearched: false});

        }
        // Get all the playlist items
        getPlaylistItems(playlistObject.id).then( (r) => {
            this.setState({playlistItems: r.items});
            this.setState({playlistObject: playlistObject});

            // Get the metrics for each song
            const trackIDs = this.getTrackIds();
            getTracksData(trackIDs).then( (r) => {
                this.setState({playlistItemsMetrics: r});
                this.setState({isSearched: true});
            }).catch ( (error) => {
                console.log(error);
            });
        }).catch( (error) => {
            console.log(error);
        });
    }

    getTrackIds() {
        // console.log(this.state.playlistItems);
        if (this.state.playlistItems.length > 0) {
            const arr = []
            this.state.playlistItems.forEach( (elt) => {
                arr.push(elt.track.id);
        });
        return arr
        }
    }

    render() {
        return (
            <React.Fragment>
                <Heading>
                    Vibecheck a playlist
                </Heading>
                <Autocomplete searchType={"playlist"} onSubmit={this.handleSubmit}/> 
                
                {this.state.isSearched &&
                    <PlaylistStatistics 
                        playlistCoverUrl={this.state.playlistObject.images[0].url} 
                        playlistName={this.state.playlistObject.name} 
                        playlistOwner={this.state.playlistObject.owner.display_name}
                        playlistTracks={this.state.playlistItems}
                        playlistItemsMetrics={this.state.playlistItemsMetrics}
                        // playlistDescription={this.state.playlistDescription}
                    />
                }
            </React.Fragment>
        );
    }
}