import React from 'react'
import axios from 'axios'
import {Heading, Hero} from 'react-bulma-components';
import { Link } from 'react-router-dom';
import ConnectSpotify from '../components/ConnectSpotify'

export class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero color="primary">
                    <Hero.Body>
                        <Heading>
                            Welcome to Vibecheck
                        </Heading>
                        <p>
                            This is a website that lets you explore the "vibe" a song or playlist has,
                            and which includes a quiz that generates a playlist for whatever vibe you want.
                            Connect to spotify to begin. Don't worry, this process is completely safe.
                        </p>
                    <ConnectSpotify></ConnectSpotify>
                    </Hero.Body>
                </Hero>
                <br/>
                <Heading>
                    User Generated Playlists
                </Heading>
                <container>
                </container>
            </div>);
    }
}

export default Home
