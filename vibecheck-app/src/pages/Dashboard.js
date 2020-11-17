import React from 'react'
import {Heading, Hero} from 'react-bulma-components';
import { Link } from 'react-router-dom';
import ConnectSpotify from '../components/ConnectSpotify'
import PlaylistCarousel from '../components/PlaylistCarousel';

export class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Hero color="primary">
                    <Hero.Body>
                        <Heading>
                            Dashboard: You're logged in!
                        </Heading>
                        <p>
                            This is a website that lets you explore the "vibe" a song or playlist has,
                            and which includes a quiz that generates a playlist for whatever vibe you want.
                            Connect to spotify to begin. Don't worry, this process is completely safe.
                        </p>
                   
                    </Hero.Body>
                </Hero>
                <br/>
                <Heading>
                    Checkout these vibes
                </Heading>
                <p>
                    Here is where we show all the playlists other users have generated using our website. This will
                    require using the backend. We will save any playlists we generate on the backend and then display them here. 
                    Hopefully this will satisfie the requirement for using the backend. We could also include a like system
                    where user can like playlists idk.
                </p>
                <PlaylistCarousel/>

            </div>);
    }
}

export default Dashboard;
