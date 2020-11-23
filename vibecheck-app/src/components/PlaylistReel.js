import React from 'react'
import { Level, Heading, Box, Media, Image, Content } from 'react-bulma-components';
import axios from 'axios';
import { getTracks } from "../API/spotifyAPI"

// Note: should probably break out media item pieces into its own component.
class PlaylistReel extends React.Component {
    constructor(props) {
        super(props);
        this.mouseEnter1 = this.mouseEnter1.bind(this);
        this.mouseLeave1 = this.mouseLeave1.bind(this);
        this.mouseEnter2 = this.mouseEnter2.bind(this);
        this.mouseLeave2 = this.mouseLeave2.bind(this);
        this.mouseEnter3 = this.mouseEnter3.bind(this);
        this.mouseLeave3 = this.mouseLeave3.bind(this);
        this.state = {
            mouseOver1: false,
            mouseOver2: false,
            mouseOver3: false,
            tracks: [{trackNames: []}, {trackNames: []}, {trackNames: []}],
            images: [],
            playlists: [{tracks: []}, {tracks: []}, {tracks: []}]
        };
    }
    componentDidMount() {
        axios.get('https://vibecheck-please.herokuapp.com/playlists/all').then(res => {
            const playlists = res.data.splice(res.data.length - 10, res.data.length - 1).reverse();
            this.setState({playlists: playlists});
    
            getTracks([playlists[0].tracks[0]]).then(res => {
                this.setState({images: [...this.state.images, res.tracks[0].album.images[0].url]});
            }).catch((e) => {
                console.error(e)
            });

            getTracks([playlists[1].tracks[0]]).then(res => {
                this.setState({images: [...this.state.images, res.tracks[0].album.images[0].url]});
            }).catch((e) => {
                console.error(e)
            });

            getTracks([playlists[2].tracks[0]]).then(res => {
                this.setState({images: [...this.state.images, res.tracks[0].album.images[0].url]});
            }).catch((e) => {
                console.error(e)
            });

            let arr = [];

            //Playlist 1
            let obj = {
                trackNames: []
            }
            for (let i = 0; i < playlists[0].tracks.length; i++) {
                getTracks([playlists[0].tracks[i]]).then(res => {
                    obj.trackNames.push(res.tracks[0].name + ' - ' + res.tracks[0].artists[0].name);
                })
            }
            arr.push(obj);

            //Playlist 2
            let obj2 = {
                trackNames: []
            }
            for (let i = 0; i < playlists[1].tracks.length; i++) {
                getTracks([playlists[1].tracks[i]]).then(res => {
                    obj2.trackNames.push(res.tracks[0].name + ' - ' + res.tracks[0].artists[0].name);
                })
            }
            arr.push(obj2);

            //Playlist 3
            let obj3 = {
                trackNames: []
            }
            for (let i = 0; i < playlists[2].tracks.length; i++) {
                getTracks([playlists[2].tracks[i]]).then(res => {
                    obj3.trackNames.push(res.tracks[0].name + ' - ' + res.tracks[0].artists[0].name);
                })
            }
            arr.push(obj3);
            this.setState({tracks: arr});
        }).catch((e) => {
            console.error(e);
        });
    }
    mouseEnter1() {
        this.setState({mouseOver1: true});
    }
    mouseLeave1() {
        this.setState({mouseOver1: false});
    }
    mouseEnter2() {
        this.setState({mouseOver2: true});
    }
    mouseLeave2() {
        this.setState({mouseOver2: false});
    }
    mouseEnter3() {
        this.setState({mouseOver3: true});
    }
    mouseLeave3() {
        this.setState({mouseOver3: false});
    }

    render() {
        return (
        <div>
            <Box>
            <Level mobile renderAs="nav">
                <Level.Item textAlignment="centered">
                    <Box>
                        <Media>
                            <Media.Item renderAs="figure" position="center" onMouseEnter={this.mouseEnter1} onMouseLeave={this.mouseLeave1}>
                                {this.state.mouseOver1 &&
                                    <Content align = 'left'>
                                        <ul>
                                            {this.state.tracks[0].trackNames.map(track => (
                                                <li>
                                                    {track}
                                                </li>
                                            ))}
                                        </ul>
                                    </Content>
                                }
                                {!this.state.mouseOver1 &&
                                    <Image alt="30x30" src = {this.state.images[0]}/>
                                }
                                <Heading renderAs="p">{this.state.playlists[0].username}</Heading>
                            </Media.Item>
                        </Media>
                    </Box>
                </Level.Item>
                <Level.Item textAlignment="centered">
                    <Box>
                        <Media>
                            <Media.Item renderAs="figure" position="center" onMouseEnter={this.mouseEnter2} onMouseLeave={this.mouseLeave2}>
                            {this.state.mouseOver2 &&
                                    <Content align = 'left'>
                                        <ul>
                                            {this.state.tracks[1].trackNames.map(track => (
                                                <li>
                                                    {track}
                                                </li>
                                            ))}
                                        </ul>
                                    </Content>
                                }
                                {!this.state.mouseOver2 &&
                                    <Image alt="30x30" src = {this.state.images[1]}/>
                                }
                                <Heading renderAs="p">{this.state.playlists[1].username}</Heading>
                            </Media.Item>
                        </Media>
                    </Box>
                </Level.Item>
                <Level.Item textAlignment="centered">
                    <Box>
                        <Media>
                            <Media.Item renderAs="figure" position="center" onMouseEnter={this.mouseEnter3} onMouseLeave={this.mouseLeave3}>
                            {this.state.mouseOver3 &&
                                    <Content align = 'left'>
                                        <ul>
                                            {this.state.tracks[2].trackNames.map(track => (
                                                <li>
                                                    {track}
                                                </li>
                                            ))}
                                        </ul>
                                    </Content>
                                }
                                {!this.state.mouseOver3 &&
                                    <Image alt="30x30" src = {this.state.images[2]}/>
                                }
                                <Heading renderAs="p">{this.state.playlists[2].username}</Heading>
                            </Media.Item>
                        </Media>
                    </Box>
                </Level.Item>
            </Level>
            </Box>
        </div>
        )
    }
}

export default PlaylistReel;
