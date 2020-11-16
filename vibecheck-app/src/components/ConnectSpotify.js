import React from 'react';
import { Button } from 'react-bulma-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ConnectSpotify extends React.Component{
    render() {
        return (
            <Button>
                <FontAwesomeIcon icon={["fab", "spotify"]}></FontAwesomeIcon>
                Connect to Spotify
            </Button>
        );
    }
}