import React, {useContext, useState} from 'react';
import { Container, Heading, Tile, Section, Image, Box } from 'react-bulma-components';
import UserDataContext from '../context/userdata';
import TopArtistList from '../components/TopArtistList'
import { getUserTopTracks } from '../API/spotifyAPI'
import './Statistics.css'

class Statistics extends React.Component {
    static userData = UserDataContext;

    constructor(props) {
        super(props) 
        this.state = {
            active: "artist",
            userData: {},
        }

        this.getTopArtists = this.getTopArtists.bind(this);
        console.log(UserDataContext);
    }

    getTopArtists() {
        getUserTopTracks(100, 0).then( (r) => {
            return r.items;
        }).catch( (error) => {
            console.log(error);
        })
    }

    render() {
        // const { userData, setUserData } = this.context;
        // console.log(this.userData);
        return (
            <div>
                <UserDataContext.Consumer>
                    {userData => {
                        <Section>
                    <Image className="is-128x128" id="user-icon" rounded src={userData.images[0].url}/>
                    <br/>
                    <Heading subtitle>
                        Welcome, {userData.display_name}
                    </Heading>
                    <div className="buttons center-item">
                        <button class="button">Your Top Tracks</button>
                        <button class="button">Your Top Artists</button>
                    </div>
                </Section>
                    {this.state.active === "artist" &&
                        <TopArtistList items={this.getTopArtists()}/>    
                    }
                    }}
                </UserDataContext.Consumer>     
            </div>
        );
    }
}

export default Statistics; 

/** 
 * 
 * 
 * <Tile kind="ancestor">
                    <Tile size={8} vertical>
                        <Tile>
                            <Tile kind="parent" vertical>
                                <Tile renderAs="article" kind="child" notification color="primary" >
                                    <Heading>Avg. Tempo</Heading>
                                    <Box>100</Box>
                                </Tile>
                                <Tile renderAs="article" kind="child" notification color="warning">
                                    <Heading>Favorite Key </Heading>
                                    <Box>100</Box>
                                </Tile>
                            </Tile>
                            <Tile kind="parent">
                                <Tile renderAs="article" kind="child" notification color="info">
                                    <Heading>Favorite Playlist</Heading>
                                    <Heading subtitle>Most played</Heading>
                                    <Box ><Image size="4by3" src="http://bulma.io/images/placeholders/640x480.png" /></Box>
                                </Tile>
                            </Tile>
                        </Tile>
                        <Tile kind="parent">
                            <Tile renderAs="article" kind="child" notification color="danger">
                                <Heading>Avg. Danceability</Heading>
                                <Box>100</Box>
                                <div className="content" />
                            </Tile>
                        </Tile>
                    </Tile>
                    <Tile kind="parent">
                        <Tile renderAs="article" kind="child" notification color="success">
                            <div className="content">
                                <Heading>Top Songs</Heading>
                                <Box>
                                    <li>song 1</li>
                                    <li>song 2</li>
                                    <li>song 2</li>
                                    <li>song 2</li>
                                    <li>song 2</li>
                                </Box>
                                <div className="content" />
                            </div>
                        </Tile>
                    </Tile>
                </Tile>
 */