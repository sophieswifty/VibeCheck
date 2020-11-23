import React, { useState, useContext } from 'react';
import { Box, Content, Media, Image, Heading, Button, Notification } from 'react-bulma-components';
import UserDataContext from '../context/userdata';
import PlaylistStatistics from './PlaylistStatistics';
import axios from 'axios';
import './NewPlaylist.css';

// Need to update Playlist details
function NewPlaylist(props) {
    const [saveNotifcation, setSaveNotification] = useState(false);
    const [userData, setUserData] = useContext(UserDataContext);


    const handleSave = async () => {
        setSaveNotification(true);

        try {
            const result = await axios({
                method: 'POST',
                url: 'http://localhost:3030/playlists',
                body: {
                    "username": userData.id,
                    "tracks": props.playlist
                }
            });
        } catch (error) {
            return error;
        }

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
                            <Image src={props.playlist.images[0].url} />
                        </div>
                    </Media.Item>
                    <Media.Item>
                        <Content className="playlist-info">
                            <Heading>
                                {props.playlist.name}
                            </Heading>
                            <p>
                                A custom playlist for you!
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
