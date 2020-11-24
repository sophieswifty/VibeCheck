import React, { useEffect, useState, useContext }from 'react'
import { Heading, Hero, Section, Box } from 'react-bulma-components';
import './Dashboard.css';
import './Home.css';
import PlaylistReel from '../components/PlaylistReel'
import { Container } from 'react-bulma-components';
import ConnectSpotify from '../components/ConnectSpotify';


function Dashboard(props) {

    return (
        <div>
            {props.auth ? <div className="logged-in-dash">
                <Hero className="dash-hero">
                    <Hero.Body className="hero-background">

                        <Section className="dashboard-text">
                            <Heading>Defining the vibe.</Heading>

                            <Heading subtitle>
                                Explore your personal listening statistics, take a quiz for a custom playlist, and learn about the metrics of songs and playlists.
                                </Heading>

                        </Section>
                        <br></br>
                        <Heading subtitle className="playlists-title">Your recently generated playlists:</Heading>
                       <PlaylistReel/>
                    </Hero.Body>
                </Hero>
            </div>

            :

            <div className="landing-dash">
                <Hero gradient size="large" className="home-hero">
                    <Hero.Body className="fade-in" align="center">
                        <div className="wrapper"><h1>▼ibec❚❚eck</h1></div>
                        <p>
                            Vibe  <i>(Noun)</i> A distinctive emotional atmosphere; sensed intuitively.
                            </p>
                        <ConnectSpotify></ConnectSpotify>
                        <div className="landing-desc">
                            <Heading size={5} className="landing-desc-slogan">
                                A custom playlist fit to the vibe.
                            </Heading>
                            <Heading subtitle size={6}>
                                If a picture is worth a 1000 words, a song is worth a 1,000,000 more. <br />
                                Take the quiz to gauge your vibe and let our algorithm produce the perfect playlist to match using you and your friends' music taste.
                                 <br></br>
                                <i>Sign in with your Spotify to get started.</i>
                            </Heading>
                        </div>
                        <br></br>

                        <Heading className="playlists-title">Checkout these recently generated playlists:</Heading>
                       <PlaylistReel />
                   

                    </Hero.Body>
                </Hero>
             
               
            </div>}


        </div>);
}

export default Dashboard;
