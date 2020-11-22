import React, { useState } from 'react';
import { Box, Content, Media, Image, Heading, Button, Notification } from 'react-bulma-components';
import './NewPlaylist.css';

// Need to update Playlist details
function NewPlaylist(props) {
    const [saveNotifcation, setSaveNotification] = useState(false);

    const handleSave = () => {
        setSaveNotification(true);
        console.log("push to db");
    }

    const handleRemove = () => {
        setSaveNotification(false);
    }

    return (
        <div className="playlist_result_box">
            <Box
                responsive={{
                    mobile: {
                        display: {
                            value: 'block'
                        },
                    },
                    tablet: {
                        display: {
                            value: 'flex'
                        },
                    },
                    desktop: {
                        display: {
                            value: 'inline-flex',
                            only: true,
                        },
                    },
                    widescreen: {
                        display: {
                            value: 'inline-block',
                        },
                    },
                }}
                hide={{
                    tablet: {
                        hide: true,
                        only: true,
                    },
                    widescreen: {
                        hide: true,
                    },
                }}
            >
                <Media>
                    <Media.Item renderAs="figure" position="left">
                        <div className="playlist-image animated-box in">
                            <Image src="https://omniaintellegohome.files.wordpress.com/2019/08/rock.jpg?w=880" />
                        </div>
                    </Media.Item>
                    <Media.Item>
                        <Content className="playlist-info">
                            <Heading>
                                PLAYLIST_NAME
                            </Heading>
                            <p>
                                Average metrics for PLAYLISTNAME:
                                <li> Danceability: </li>
                                <li> Acousticness: </li>
                                <li> Tempo: </li>
                                <li> Liveness: </li>
                            </p>
                            <Button onClick={props.restart}>Restart</Button>
                            <Button color="primary" onClick={handleSave}>Save</Button>
                            {saveNotifcation && <Notification color="success">
                                Playlist successfully saved to Spotify and VibeCheck.
                                    <Button remove onClick={handleRemove} />
                            </Notification>}
                        </Content>
                    </Media.Item>
                </Media>
            </Box>
        </div>
    )
}

export default NewPlaylist;