import React from 'react'
import { Heading, Hero, Section } from 'react-bulma-components';
import './Dashboard.css';
import PlaylistReel from '../components/PlaylistReel';
import { Container } from 'react-bulma-components';
import { getUserData } from '../API/spotifyAPI';
import ConnectSpotify from '../components/ConnectSpotify';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <Hero className="dash-hero">
                    <Hero.Body className="hero-background">

                                <Section className="dashboard-text">
                                <Heading>Defining the vibe.</Heading>
                                <ConnectSpotify></ConnectSpotify>
                                <Heading subtitle>
                                Explore your personal listening statistics, take a quiz for a custom playlist, and learn about the metrics of songs and playlists. 
                                </Heading>
                               
                                 </Section>
                
                    </Hero.Body>
                </Hero>
                <br />
                <Container>
                    <Container>
                        <PlaylistReel title="Your recently generated playlists"/>
                    </Container>
                </Container>


            </div>);
    }
}

export default Dashboard;
