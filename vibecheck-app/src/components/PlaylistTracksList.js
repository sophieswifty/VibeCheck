import React from 'react';
import { Box, Button, Heading, Card, Image, Section, Container } from 'react-bulma-components';
import './PlaylistTracksList.css'

export default function PlaylistTracksList(props) {

        return (
            <React.Fragment>
                <Section>
                    <Container>
                        <Heading>{props.title}</Heading>
                            {/* <Button onClick={this.handleRecentlyPlayedTracks}>Recently Played Tracks</Button> */}
                    </Container>
                    <hr />
                    <Container>
                        {props.items.map( (s, i) => {
                            return (
                                <div className="columns">
                                    <div className="column vcenter">
                                        <h3>
                                            {`${s.track.artists[0].name} - ${s.track.name}`}
                                        </h3>
                                    </div>
                                    <div className="column">
                                        <a href={s.track.external_urls.spotify} target="_blank">
                                            <img src={s.track.album.images[1].url} className="is-128x128" alt="icon" />
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </Container>
                </Section>
            </React.Fragment>
        )
}

/**
 *                                 <div className="card">
                                    <div className="columns">
                                        <div className="column">
                                            <a href={s.track.external_urls.spotify}>
                                                <img src={s.track.album.images[1].url} className="is-128x128"/>
                                            </a>
                                        </div>
                                        <div className="column vcenter" style={{textAlign: "right"}}>
                                            <h1 className="subtitle">
                                            {`${s.track.artists[0].name} - ${s.track.name}`}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
 */