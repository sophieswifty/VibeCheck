import React from 'react';
import { Button } from 'react-bulma-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ConnectSpotify() {

    function handleConnect() {
        const {
            REACT_APP_CLIENT_ID,
            REACT_APP_AUTHORIZE_URL,
            REACT_APP_REDIRECT_URL
        } = process.env;

        const scope = 'user-read-private user-read-email playlist-modify-public user-top-read user-library-read';
        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&scope=${scope}&show_dialog=true`
    };

    return (
        <Button size="large" onClick={handleConnect}>
            <div className="spotify-icon">
                <FontAwesomeIcon icon={["fab", "spotify"]} />
            </div>
                Connect to Spotify
        </Button>
    );

}

export default ConnectSpotify;