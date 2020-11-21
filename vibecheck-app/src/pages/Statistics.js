import React from 'react';
import { Container, Heading, Tile, Section, Image, Box } from 'react-bulma-components';

function Statistics(props) {

    return (
        <div>
            <Section>
            <Heading subtitle>
                    Listening statistics for props.username
                </Heading>
            <Box>
                <Tile kind="ancestor">
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
            </Box>
    </Section>

            </div >
        );
}

export default Statistics; 
