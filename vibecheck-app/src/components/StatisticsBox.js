import React from 'react';
import { Box, Button, Heading, Card, Image, Section, Container } from 'react-bulma-components';
import { getUserTopTracks, getUserTopArtists, getUserRecentlyPlayedTracks } from '../API/spotifyAPI';
import { Link } from 'react-router-dom'
import './StatisticsBox.css'

export default class StatisticsBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            display: [],
        }

        this.handleTopTracks = this.handleTopTracks.bind(this);
        this.handleTopArtists = this.handleTopArtists.bind(this);
        this.handleRecentlyPlayedTracks = this.handleRecentlyPlayedTracks.bind(this);

        this.fetchTopTracks = this.fetchTopTracks.bind(this);
        this.fetchTopArtists = this.fetchTopArtists.bind(this);
        this.fetchRecentlyPlayedTracks = this.fetchRecentlyPlayedTracks.bind(this);
    }

    componentDidMount(props) {
        this.setState({title: "Top Tracks"});
        this.fetchTopTracks();
    }

    handleTopTracks(e) {
        this.setState({title: "Top Tracks"});
        this.fetchTopTracks(); // function sets the state
    }

    handleTopArtists(e) {
        this.setState({title: "Top Artists"});
        this.fetchTopArtists(); // function sets the state
    }

    handleRecentlyPlayedTracks(e) {
        this.setState({title: "Recently Played Tracks"});
        this.fetchRecentlyPlayedTracks();
    }

    fetchTopTracks() {
        getUserTopTracks(100, 0).then( (r) => {
            console.log(r);
            let items = [];
            r.items.forEach( (elt, i) => {
                items.push({
                    index: i,
                    name: `${elt.artists[0].name} - ${elt.name}`,
                    image: elt.album.images[1].url,
                    url: elt.external_urls.spotify,
                })
            });
            this.setState({display: items});
        }).catch( (error) => {
            console.log(error);
        })
    }

    fetchTopArtists() {
        getUserTopArtists(100, 0).then( (r) => {
            console.log(r);
            let items = [];
            r.items.forEach( (elt, i) => {
                items.push({
                    index: i,
                    name: elt.name,
                    image: elt.images[1].url,
                    url: elt.external_urls.spotify
                })
            });
            this.setState({display: items});
        }).catch( (error) => {
            console.log(error);
        })
    }

    fetchRecentlyPlayedTracks() {
        getUserRecentlyPlayedTracks().then( (r) => {
            console.log(r);
        })
    }

    render() {
        return (
            <React.Fragment>
                <Section>
                    <Container>
                        <Box>
                            <Heading>{this.state.title}</Heading>
                                <Button onClick={this.handleTopArtists}>Top Artists</Button>
                                <Button onClick={this.handleTopTracks}>Top Tracks</Button>
                                {/* <Button onClick={this.handleRecentlyPlayedTracks}>Recently Played Tracks</Button> */}
                        </Box>
                    </Container>
                    <Container>
                    <div className="card">
                        <div className="columns">
                            <div className="column vcenter">
                                <h1 className="title">
                                    <strong>Ranking</strong>
                                </h1>
                            </div>
                            <div className="column vcenter">
                                <h1 className="title">
                                    <strong>Title</strong>
                                </h1>
                            </div>
                            <div className="column">
                                <h1>
                                <strong>Cover</strong>
                                </h1>
                            </div>
                            </div>
                        </div>
                        {this.state.display.map( (s, i) => {
                            return (
                                <div className="card">
                                    <div className="columns">
                                        <div className="column vcenter">
                                            <h1 className="title">
                                                <strong>{i+1}</strong>
                                            </h1>
                                        </div>
                                        <div className="column vcenter">
                                            <h1 className="title">
                                            {s.name}
                                            </h1>
                                        </div>
                                        <div className="column">
                                            <a href={s.url}>
                                                <img src={s.image} className="is-128x128"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Container>
                </Section>
            </React.Fragment>
        )
    }
}

/** */