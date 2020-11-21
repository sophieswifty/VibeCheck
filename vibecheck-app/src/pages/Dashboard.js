import React from 'react'
import { Heading, Hero, Section } from 'react-bulma-components';
import './Dashboard.css';
import PlaylistReel from '../components/PlaylistReel';
import { Container } from 'react-bulma-components';
import { getUserData } from '../API/spotifyAPI';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <Hero className="dash-hero">
                    <Hero.Body>

                                <Section style={{ backgroundColor: 'white' }}>
                                Welcome to Vibecheck. 
                                <br/>
                                Want the perfect playlist for the moment? Take our quiz.
                                Want to view your personal listening statstics? Let us do the math.
                                Want to learn about the metrics of a song or playlist? Vibify any tune.
                                </Section>
                
                    </Hero.Body>
                </Hero>
                <br />
                <Container>
                    <Container>
                        <PlaylistReel title="Your generated playlists"/>
                    </Container>
                </Container>


            </div>);
    }
}

export default Dashboard;
