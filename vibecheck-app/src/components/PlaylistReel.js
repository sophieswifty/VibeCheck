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
            playlists: [{}, {}, {}]
        }
    }
    componentDidMount() {
        axios.get('https://vibecheck-please.herokuapp.com/playlists/all').then(res => {
            const playlists = res.data.slice(res.data.length - 3, res.data.length).reverse();
            this.setState({ playlists: playlists });

        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        return (


            <div className="tiles">

                <Box className="tile">
                    <figure>
                        <a href={this.state.playlists[0].playlistURL}>
                            <img src={this.state.playlists[0].playlistIMG} />
                        </a>

                        <figcaption className="caption">
                            <Heading>{this.state.playlists[0].displayName}</Heading>
                            <Heading subtitle>{this.state.playlists[0].playlistName} </Heading>
                        </figcaption>
                    </figure>
                </Box>

                <Box className="tile">
                    <figure>
                        <a href={this.state.playlists[1].playlistURL}>
                            <img src={this.state.playlists[1].playlistIMG} />
                        </a>

                        <figcaption className="caption">
                            <Heading>{this.state.playlists[1].displayName}</Heading>
                            <Heading subtitle>{this.state.playlists[1].playlistName} </Heading>
                        </figcaption>
                    </figure>
                </Box>

                <Box className="tile">
                    <figure>
                        <a href={this.state.playlists[2].playlistURL}>
                            <img src={this.state.playlists[2].playlistIMG} />
                        </a>

                        <figcaption className="caption">
                            <Heading>{this.state.playlists[2].displayName}</Heading>
                            <Heading subtitle>{this.state.playlists[2].playlistName} </Heading>
                        </figcaption>
                    </figure>
                </Box>

            </div>
        )
    }
}

export default PlaylistReel;
