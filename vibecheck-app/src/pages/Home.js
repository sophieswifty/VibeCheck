import React from 'react'
<<<<<<< HEAD
import { Heading, Hero, Container, Section, Box } from 'react-bulma-components';
=======
import axios from 'axios'
import {Heading, Hero} from 'react-bulma-components';
>>>>>>> backend
import { Link } from 'react-router-dom';
import ConnectSpotify from '../components/ConnectSpotify'
import PlaylistReel from '../components/PlaylistReel';
import './Home.css';


export class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero gradient size="large" className="home-hero">
                        <Hero.Body align="center">
                            <div className="wrapper"><h1>▼ibec❚❚eck</h1></div>
                            <p>
                            Vibe  <i>(Noun)</i> A distinctive emotional atmosphere; sensed intuitively. 
                            </p>
                            <ConnectSpotify></ConnectSpotify>
                        </Hero.Body>
                <Box className="desc">
                         
                    <Heading size={5}>
                        A custom playlist fit to the vibe.
                    </Heading>
                    <Heading subtitle size={6}>
                        If a picture is worth a 1000 words, a song is worth a 1,000,000 more. 
                        Take the quiz to gauge your vibe and let our algorithm produce the perfect playlist to match using you and your friends' music taste. 
                        <br></br>
                        <i>Sign in with your spotify to get started.</i>
                    </Heading>
                </Box>
                </Hero>
                <br />
               
                <br></br>
                <Container>
                    <div class="playlist-reel-home">
                    <PlaylistReel title="Recently vibified playlists"/>
                    </div>
                </Container>
                <br/>
<<<<<<< HEAD
=======
                <Heading>
                    User Generated Playlists
                </Heading>
                <container>
                </container>
>>>>>>> backend
            </div>);
    }
}

export default Home
