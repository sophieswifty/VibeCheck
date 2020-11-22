import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { Heading, Box, Section, Container, Image} from 'react-bulma-components';
import './SongStatistics.css'
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
                this.props.playlistItemsMetrics.audio_features.forEach( (elt, i) => {
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
                    <Heading>
                        {this.props.songName}
                    </Heading>
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-5 is-parent" id="album-image-tile">
                            <div className="tile is-6 is-child">
                                <Image src={this.props.albumCover} id="album-img">
                                </Image>
                            </div>
                        </div>
                        <div className="tile is-6 is-child">
                            <PlaylistHistogram title={"Acousticness"} data={this.state.acousticness}/>
                            <PlaylistHistogram title={"Danceability"} data={this.state.danceability}/>
                            <PlaylistHistogram title={"Energy"} data={this.state.energy}/>
                            <PlaylistHistogram title={"Instrumentalness"} data={this.state.instrumentalness}/>
                            <PlaylistHistogram title={"Liveness"} data={this.state.liveness} />
                            <PlaylistHistogram title={"Speechiness"} data={this.state.speechiness} />
                            <PlaylistHistogram title={"Valence"} data={this.state.valence}/>
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