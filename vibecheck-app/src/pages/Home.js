import React from 'react'
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
                        <Link to="./quiz">
                    <ConnectSpotify></ConnectSpotify>
                    </Link>
                    </Hero.Body>
                </Hero>
                <br/>
                <Heading>
                    User Generated Playlists
                </Heading>
                <p>
                    Here is where we show all the playlists other users have generated using our website. This will
                    require using the backend. We will save any playlists we generate on the backend and then display them here. 
                    Hopefully this will satisfie the requirement for using the backend. We could also include a like system
                    where user can like playlists idk.
                </p>
            </div>);
    }
}

export default Home
