import React from 'react'
import { Level, Heading, Box, Tile } from 'react-bulma-components';
import axios from 'axios';
import { getTracks } from "../API/spotifyAPI"
import './PlaylistReel.css';

// Note: should probably break out media item pieces into its own component.
class PlaylistReel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [{}, {}, {}, {}]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/playlists/all').then(res => {
            let playlists = [{"backendID":0,"playlistID":"37i9dQZF1DX0XUsuxWHRQd","playlistURL":"https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd","playlistName":"RapCaviar","playlistIMG":"https://i.scdn.co/image/ab67706f000000031b89435bb4df05b53c326980","userID":"ujeshregmi","displayName":"Ujesh R"},{"backendID":1,"playlistID":"37i9dQZF1DXbITWG1ZJKYt","playlistURL":"https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt","playlistName":"Jazz Classics","playlistIMG":"https://i.scdn.co/image/ab67706f0000000388b40afd9e31d92a818f355d","userID":"alecwhite","displayName":"Alec W"},{"backendID":2,"playlistID":"37i9dQZF1DWWQRwui0ExPn","playlistURL":"https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn","playlistName":"Lo-Fi Beats","playlistIMG":"https://i.scdn.co/image/ab67706f00000003c414e7daf34690c9f983f76e","userID":"dschimtz","displayName":"Dennis S"}, {"backendID":2,"playlistID":"37i9dQZF1DWWQRwui0ExPn","playlistURL":"https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn","playlistName":"Happy Day","playlistIMG":"https://i.scdn.co/image/ab67706f00000003c414e7daf34690c9f983f76e","userID":"sdimos","displayName":"Sofia D"}]
        
            if (res.data.length > 4) {
                playlists = res.data.slice(res.data.length - 4, res.data.length).reverse();
            }

            this.setState({ playlists: playlists });

        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        return (

<div className="columns">
            <div className="tiles">

                <Box className="tile">
                    <figure>
                        <a href={this.state.playlists[0].playlistURL}  target="_blank">
                            <img src={this.state.playlists[0].playlistIMG} />
                        </a>

                        <figcaption className="caption">
                            <Heading>{this.state.playlists[1].playlistName} </Heading>
                            <Heading subtitle>{this.state.playlists[1].displayName}</Heading>
                         </figcaption>
                    </figure>
                </Box>

                <Box className="tile">
                    <figure>
                        <a href={this.state.playlists[1].playlistURL}  target="_blank">
                            <img src={this.state.playlists[1].playlistIMG} />
                        </a>

                        <figcaption className="caption">
                            <Heading>{this.state.playlists[1].playlistName} </Heading>
                            <Heading subtitle>{this.state.playlists[1].displayName}</Heading>
                        </figcaption>
                    </figure>
                </Box>

                <Box className="tile">
                    <figure>
                        <a href={this.state.playlists[2].playlistURL} target="_blank">
                            <img src={this.state.playlists[2].playlistIMG} />
                        </a>

                        <figcaption className="caption">
                            <Heading>{this.state.playlists[2].displayName}</Heading>
                            <Heading subtitle>{this.state.playlists[2].playlistName} </Heading>
                        </figcaption>
                    </figure>
                </Box>

                <Box className="tile">
                    <figure>
                        <a href={this.state.playlists[3].playlistURL} target="_blank">
                            <img src={this.state.playlists[3].playlistIMG} />
                        </a>

                        <figcaption className="caption">
                            <Heading>{this.state.playlists[3].displayName}</Heading>
                            <Heading subtitle>{this.state.playlists[3].playlistName} </Heading>
                        </figcaption>
                    </figure>
                </Box>

            </div>
            </div>
        )
    }
}

export default PlaylistReel;