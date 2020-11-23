import React from 'react'
import PlayReel from '../components/PlayReel'
import { Container, Section } from 'react-bulma-components';

export class PR extends React.Component {
    render() {
        return (
            <Section>
                <Container>
                    <PlayReel></PlayReel>
                </Container>
            </Section>
        )
    }
}