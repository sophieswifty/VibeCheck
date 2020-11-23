import React from 'react'
import { Level, Heading, Box, Media, Image, Content } from 'react-bulma-components';
import axios from 'axios';
import { getTracks } from "../API/spotifyAPI"

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
            this.setState({playlists: playlists});
    
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        return (
        <div>
            <Box>
            <Level mobile renderAs="nav">
                <Level.Item textAlignment="centered">
                    <Box>
                        <Media>
                            <Media.Item renderAs="figure" position="center">
                                <a href = {this.state.playlists[0].playlistURL}>
                                    <Image alt="30x30" src = {this.state.playlists[0].playlistIMG}/>
                                </a>
                                <Content>
                                    <h1>{this.state.playlists[0].displayName}</h1>
                                    <p style= {{fontSize: 25}}> {this.state.playlists[0].userID} </p>
                                    <br></br>
                                </Content>
                            </Media.Item>
                        </Media>
                    </Box>
                </Level.Item>
                <Level.Item textAlignment="centered">
                    <Box>
                        <Media>
                            <Media.Item renderAs="figure" position="center">
                                <a href = {this.state.playlists[1].playlistURL}>
                                    <Image alt="30x30" src = {this.state.playlists[1].playlistIMG}/>
                                </a>
                                <Content>
                                    <h1>{this.state.playlists[1].displayName}</h1>
                                    <p style= {{fontSize: 25}}> {this.state.playlists[1].userID} </p>
                                    <br></br>
                                </Content>
                            </Media.Item>
                        </Media>
                    </Box>
                </Level.Item>
                <Level.Item textAlignment="centered">
                    <Box>
                        <Media>
                            <Media.Item renderAs="figure" position="center">
                                <a href = {this.state.playlists[2].playlistURL}>
                                    <Image alt="30x30" src = {this.state.playlists[2].playlistIMG}/>
                                </a>
                                <Content>
                                    <h1>{this.state.playlists[2].displayName}</h1>
                                    <p style= {{fontSize: 25}}> {this.state.playlists[2].userID} </p>
                                    <br></br>
                                </Content>
                            </Media.Item>
                        </Media>
                    </Box>
                </Level.Item>
            </Level>
            </Box>
        </div>
        )
    }
}

export default PlaylistReel;
