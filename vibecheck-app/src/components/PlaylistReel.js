import React from 'react'
import { Level, Heading, Box, Media, Image } from 'react-bulma-components';

// Note: should probably break out media item pieces into its own component.

function PlaylistReel() {
    return (
        <div>
            <Box>
            <Heading size={4}>
                        <i>Recently vibified playlists:</i>
                    </Heading>
            <Level mobile renderAs="nav">
                <Level.Item textAlignment="centered">
                    <Box>
                        <Media>
                            <Media.Item renderAs="figure" position="center">
                                <Image size={10} alt="30x30" src="http://bulma.io/images/placeholders/128x128.png" />
                                <p className="heading">Playlist 1</p>
                                <Heading renderAs="p">Tear Drop</Heading>
                            </Media.Item>
                        </Media>
                    </Box>
                </Level.Item>
                <Level.Item textAlignment="centered">
                    <Box>
                        <Media>
                            <Media.Item renderAs="figure" position="center">
                                <Image size={10} alt="30x30" src="http://bulma.io/images/placeholders/128x128.png" />
                                <p className="heading">Playlist 1</p>
                                <Heading renderAs="p">Serotonin</Heading>
                            </Media.Item>
                        </Media>
                    </Box>
                </Level.Item>
                <Level.Item textAlignment="centered">
                    <Box>
                        <Media>
                            <Media.Item renderAs="figure" position="center">
                                <Image size={10} alt="30x30" src="http://bulma.io/images/placeholders/128x128.png" />
                                <p className="heading">Playlist 1</p>
                                <Heading renderAs="p">Lofi Focus</Heading>
                            </Media.Item>
                        </Media>
                    </Box>
                </Level.Item>
                <Level.Item textAlignment="centered">
                    <Box>
                        <Media>
                            <Media.Item renderAs="figure" position="center">
                                <Image size={10} alt="30x30" src="http://bulma.io/images/placeholders/128x128.png" />
                                <p className="heading">Playlist 1</p>
                                <Heading renderAs="p">Golden Hr</Heading>
                            </Media.Item>
                        </Media>
                    </Box>
                </Level.Item>
            </Level>
            </Box>
        </div>
    )
}

export default PlaylistReel;
