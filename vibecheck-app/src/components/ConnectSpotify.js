import React from 'react';
import { Button } from 'react-bulma-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ConnectSpotify extends React.Component {
    constructor(props) {
        super(props);
    }

    handleConnect() {
        const {
            REACT_APP_CLIENT_ID,
            REACT_APP_AUTHORIZE_URL,
            REACT_APP_REDIRECT_URL
        } = process.env;
        
        window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`
    }

    render() {
        return (
            <Button onClick={this.handleConnect}>
                <FontAwesomeIcon icon={["fab", "spotify"]}></FontAwesomeIcon>
                Connect to Spotify
            </Button>
        );
    }
}