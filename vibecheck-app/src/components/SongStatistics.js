import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { Heading, Box, Section, Container, Image} from 'react-bulma-components';
import './SongStatistics.css'

export default class SongStatistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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

        console.log(this.state.data);
        console.log(this.props.albumCover)
    }

    render() {
        return (
        <Section>
            <Container>
                <Box>
                    <Heading>
                        {this.props.songName}
                    </Heading>
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-5" id="album-image-tile">
                            <div className="tile is-6">
                                <Image src={this.props.albumCover} id="album-img">
                                </Image>
                            </div>
                        </div>
                        <div className="tile is-6">
                            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={this.state.data}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="category" />
                                <PolarRadiusAxis/>
                                <Radar name="Mike" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </div>
                    </div>
                </Box>
            </Container>
        </Section>
        );
    }
}