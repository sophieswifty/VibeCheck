import React, { PureComponent } from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { Heading, Box, Tile, Section, Container, Image } from 'react-bulma-components';
import './SongStatistics.css'

export default class SongStatistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            data: [
                {
                    category: "Acousticness", score: this.props.songMetrics.acousticness
                }, {
                    category: "Danceability", score: this.props.songMetrics.danceability
                }, {
                    category: "Energy", score: this.props.songMetrics.energy
                }, {
                    category: "Instrumentalness", score: this.props.songMetrics.instrumentalness
                }, {
                    category: "Liveness", score: this.props.songMetrics.liveness
                }, {
                    category: "Speechiness", score: this.props.songMetrics.speechiness
                }, {
                    category: "Valence", score: this.props.songMetrics.valence
                }
            ]
        }
    }

    // CLick on image, show stats. Trying to get this to wor but giving up it s 2am
    render() {
        return (

            <Container>
                <br />
                <br />
                <Box>
                    
                    <div className="columns">
                        <div classname="column">
                            <div className="audio-image animated-box">
                                <a href={this.props.songURL}>
                                    <Image src={this.props.albumCover} />
                                </a>
                            </div>
                        </div>
                        <div className="column">
                        <Heading className="vs-title">
                        <h3 >
                            <i> {this.props.songName}</i>
                        </h3>
                        <h5 className="track-artist">
                            {this.props.artistName}
                        </h5>
                    </Heading>
                            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={this.state.data} className="chart">
                                <PolarGrid />
                                <PolarAngleAxis dataKey="category" />
                                <PolarRadiusAxis />
                                <Radar dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </div>
                    </div>

                   
                    <div className="columns">
                            <div className="column">
                                <div>
                                    <h5>Acousticness</h5>
                                    <p>A Confidence measure from 0.0 to 1.0 of whether the track is acoustic.</p>
                                </div>
                                <div>
                                    <h5>Danceability</h5>
                                    <p>Describes how suitable a track is for dancing with 1.0 indicating high danceability. Based on the tempo and rhythm stability.</p>
                                </div>
                                <div>
                                    <h5>Instrumentalness</h5>
                                    <p>Predicts whether a track contains words. The closer to 1.0, the less wordy the song is.</p>
                                </div>
                            </div>
                            <div className="column">
                                <div>
                                   <h5>Energy</h5>
                                    <p>Predicts the energy of a track with a 1.0 indicating the track is fast, intense.</p>
                                </div>
                                <div>
                                    <h5>Liveness</h5>
                                    <p>Detects the presence of an audience in the recording. A value above 0.8 is a strong indicator that the track was recorded live.</p>
                                </div>
                                <div>
                                    <h5>Valence</h5>
                                    <p>Songs with a valence close to 1.0 are cheerful and euphoric, while those closer 0.0 sound depressing and sad.</p>
                                </div>
                            </div>
                        </div>
                   
                </Box>
            </Container>
        );
    }
}
