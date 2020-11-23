import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { Heading, Box, Tile, Section, Container, Image} from 'react-bulma-components';
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
                <Box>
                    <Heading>
                        {`${this.props.artistName} - ${this.props.songName}`}
                    </Heading>
                    <div>
                    <Tile className="chart-container">
                        <div className="audio-image animated-box">
                            <a href={this.props.songURL} target="_blank">
                                <Image src={this.props.albumCover}/> 
                            </a>
                        </div>
                        
                            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={this.state.data} className="chart">
                                <PolarGrid />
                                <PolarAngleAxis dataKey="category" />
                                <PolarRadiusAxis/>
                                <Radar dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </Tile>
                    </div>
                </Box>
            </Container>

        );
    }
}
