import React from 'react'
import PlaylistReel from './PlaylistReel'
import { Container, Section } from 'react-bulma-components';

export class PR extends React.Component {
    render() {
        return (
            <Section>
                <Container>
                    <PlaylistReel></PlaylistReel>
                </Container>
            </Section>
        )
    }
}

export default PR;