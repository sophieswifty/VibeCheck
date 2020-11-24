import React, { PureComponent } from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { Heading, Box, Section, Container, Image } from 'react-bulma-components';
import './PlaylistStatistics.css'
import { Chart } from 'react-google-charts';

export default class PlaylistStatistics extends React.Component {
    constructor(props) {
        super(props);

        let acousticness = [['Song Name', 'Acousticness']];
        let danceability = [['Song Name', 'Danceability']];
        let energy = [['Song Name', 'Danceability']];
        let instrumentalness = [['Song Name', 'Instrumentalness']];
        let liveness = [['Song Name', 'Liveness']];
        let speechiness = [['Song Name', "Speechiness"]];
        let valence = [['Song Name', 'Valence']];

        if (this.props.playlistItemsMetrics.audio_features.length > 0) {
            try {
                this.props.playlistItemsMetrics.audio_features.forEach((elt, i) => {
                    const label = `${this.props.playlistTracks[i].track.artists[0].name} - ${this.props.playlistTracks[i].track.name}`
                    acousticness.push([label, elt.acousticness]);
                    danceability.push([label, elt.danceability]);
                    energy.push([label, elt.energy]);
                    instrumentalness.push([label, elt.instrumentalness]);
                    liveness.push([label, elt.liveness]);
                    speechiness.push([label, speechiness]);
                    valence.push([label, elt.valence]);
                });
            } catch (e) {
                console.log(e);
            }
        }

        this.state = {
            acousticness: acousticness,
            danceability: danceability,
            energy: energy,
            instrumentalness: instrumentalness,
            liveness: liveness,
            speechiness: speechiness,
            valence: valence,
        }
    }

    render() {
        return (
            <Section>
                <Container>
                    <Box>
                        <div className="media">
                            <div className="media-left playlist-image">
                                <div className="audio-image animated-box">
                                    <a href={this.props.playlistURL} target="_blank">
                                        <img src={this.props.playlistCoverUrl} id="album-img" />
                                    </a>
                                </div>
                            </div>
                            <div className="media-right" id="playlist-name">
                                <p className="title" >

                                    <h1 >
                                        <i> {this.props.playlistName}</i>
                                    </h1>
                                    <h4 className="track-artist">
                                    {this.props.playlistOwner}
                                    </h4>
                                  
                                </p>
                        </div>
                    </div>
                    
                        <div className="columns">
                            <div className="column">
                                <div>
                                    <PlaylistHistogram title="Acousticness" data={this.state.acousticness} />
                                    <p>A Confidence measure from 0.0 to 1.0 of whether the track is acoustic.</p>
                                </div>
                                <div>
                                    <PlaylistHistogram title={"Danceability"} data={this.state.danceability} />
                                    <p>Describes how suitable a track is for dancing with 1.0 indicating high danceability. Based on the tempo and rhythm stability.</p>
                                </div>
                                <div>
                                    <PlaylistHistogram title={"Instrumentalness"} data={this.state.instrumentalness} />
                                    <p>Predicts whether a track contains words. The closer to 1.0, the less wordy the song is.</p>
                                </div>
                            </div>
                            <div className="column">
                                <div>
                                    <PlaylistHistogram title={"Energy"} data={this.state.energy} />
                                    <p>Predicts the energy of a track with a 1.0 indicating the track is fast, intense.</p>
                                </div>
                                <div>
                                    <PlaylistHistogram title={"Liveness"} data={this.state.liveness} />
                                    <p>Detects the presence of an audience in the recording. A value above 0.8 is a strong indicator that the track was recorded live.</p>
                                </div>
                                <div>
                                    <PlaylistHistogram title={"Valence"} data={this.state.valence} />
                                    <p>Songs with a valence close to 1.0 are cheerful and euphoric, while those closer 0.0 sound depressing and sad.</p>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Container>
            </Section>
        );
    }
}

class PlaylistHistogram extends React.Component {
    static getDerivedStateFromProps(props, current_state) {
        if (current_state.data !== props.data) {
            return {
                data: props.data,
            }
        }
        return null
    }

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Histogram"
                loader={<div>Loading Chart</div>}
                data={this.state.data}
                options={{
                    title: this.props.title,
                    legend: { position: 'none' },
                    colors: ['#4285F4'],
                    chartArea: { width: 401 },
                    bar: { gap: 0 },
                    histogram: {
                        bucketSize: 0.1,
                        maxNumBuckets: 200,
                        minValue: 0,
                        maxValue: 1,
                    },
                }}
                rootProps={{ 'data-testid': '4' }}
            />
        );
    }
}