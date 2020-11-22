import Axios from 'axios';
import React from 'react';
import { Section, Container, Button } from 'react-bulma-components';

let getPlaylists = async function() {
    const result = await Axios({
        method: 'get',
        url: 'http://localhost:3030/playlists/all'
    });

    console.log(result);
}


export default class PublicPlaylist extends React.Component {
    constructor(props) {
        super(props);

        getPlaylists();

    }

    render() {
        return (
            <Section>
                <Container>
                </Container>
            </Section>
        )
    }
}