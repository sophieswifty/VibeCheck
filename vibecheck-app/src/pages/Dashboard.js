import React, { useEffect, useState, useContext }from 'react'
import { Heading, Hero, Section, Box } from 'react-bulma-components';
import './Dashboard.css';
import './Home.css';
import PR from '../components/PR';
import { Container } from 'react-bulma-components';
import ConnectSpotify from '../components/ConnectSpotify';


function Dashboard(props) {
    // const [landingPage, setLandingPage] = useState(true);
    // const [authTokens, setAuthTokens] = useContext(AuthContext);

    // useEffect(() => {
    //     if (authTokens) {
    //         setLandingPage(false);
    //     }
    // }, [authTokens])

    return (
        <div>
            {props.auth && <div className="logged-in-dash">
                <Hero className="dash-hero">
                    <Hero.Body className="hero-background">

                        <Section className="dashboard-text">
                            <Heading>Defining the vibe.</Heading>

                            <Heading subtitle>
                                Explore your personal listening statistics, take a quiz for a custom playlist, and learn about the metrics of songs and playlists.
                                </Heading>

                        </Section>

                    </Hero.Body>
                </Hero>
                <br />
                <Container>
                    <Container>
                        <PR />
                    </Container>
                </Container>
            </div>}

            {!props.auth && <div className="landing-dash">
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
                                <i>Sign in with your spotify to get started.</i>
                            </Heading>
                        </div>
                    </Hero.Body>
                </Hero>
                <br />

                <br></br>
                <Section>
                    <PR />
                </Section>
                <br />
            </div>}


        </div>);
}

export default Dashboard;
