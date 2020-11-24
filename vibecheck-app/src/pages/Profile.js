import React, { useContext, useState } from 'react';
import { Container, Button, Box, Heading, Notification, Field, Control } from 'react-bulma-components';
import UserDataContext from '../context/userdata';
import { deleteAllUserPlaylists } from '../API/backendAPI'
import './Profile.css';

function Profile(props) {

    const [userData, setUserData] = useContext(UserDataContext);
    const [deleteUserWarning, setDeleteUserWarning] = useState(false);
    const [deletePlaylistsSuccess, setDeletePlaylistsSuccess] = useState(false);

    const deleteData = async () => {
        console.log("deleting account");
        deleteAllUserPlaylists(userData.id);
    }

    const clearPlaylistData = async () => {
        setDeletePlaylistsSuccess(true);

        // try {
        //     const result = await axios({
        //         method: 'DELETE',
        //         url: 'https://vibecheck-please.herokuapp.com/dashboard/playlists/all',
        //     });

        //     console.log(result.data);
        // } catch (error) {
        //     return error;
        // }
    }

    const showWarning = () => {
        setDeleteUserWarning(true);
    }

    const handleRemove = () => {
        setDeletePlaylistsSuccess(false);
        setDeleteUserWarning(false);
    }

    const yesDelete = () => {
        deleteData();
        window.location.href='/'; // Redirect to login page.
        setDeletePlaylistsSuccess(false);
        setDeleteUserWarning(false);
    }

    const noDelete = () => {
        setDeletePlaylistsSuccess(false);
        setDeleteUserWarning(false);
    }


    return (
        <div>
            <Container>
                <div className="profile">
                    <Heading>{userData.display_name}</Heading>
                    <div className="profile-image">
                        <a href={userData.external_urls.spotify} target="_blank">
                            <img src={userData.images[0].url} id="album-img" />
                        </a>
                    </div>

                    <Button color="danger" onClick={showWarning}>Delete all data</Button>

                    {deleteUserWarning &&
                        <Notification color="warning">
                            Are you sure you want to clear user data?
                            You will be logged out automatically if yes.
                       
                                    <Button type="primary" onClick={yesDelete}>Yes</Button>
                               
                                    <Button color="danger" onClick={noDelete}>Cancel</Button>
                              
                        </Notification>}

                    {deletePlaylistsSuccess && <Notification color="success">
                        All your playlists have been cleared from Vibecheck!
                        <Button remove onClick={handleRemove} />
                    </Notification>}

                </div>
            </Container>
            <Box className="dev">
                <h5>Developer Team:</h5>
                <h6>Sofia Dimos</h6>
                <h6>Ujesh Regmi</h6>
                <h6>Mahler Revsine</h6>
                <h6>Dennis Schimtzek</h6>
                <h6>Sophie Swift</h6>

  </Box>
        </div>
    )
}

export default Profile;
