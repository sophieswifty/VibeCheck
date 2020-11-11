import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components';
import paintGif from '../assets/greenpaint.gif';
import paintPng from '../assets/greenpaint.PNG';
import ReactDOM from 'react-dom';

const e = React.createElement;

const Styles = styled.div`
    .jumbo {
        background: url(${paintPng}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: black;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }


`;

export const Jumbo = () => {
    
    return (
        <Styles>
        <Jumbotron fluid className="jumbo">
            <Container>
                <h1>Welcome to VibeCheck.</h1>
                <p>
                    It's time to check yo vibes, son.
                 </p>
            </Container>
        </Jumbotron>
        </Styles>
    )
}

export default Jumbo

const domContainer = document.querySelector('#jumbo');
ReactDOM.render(e(Jumbo), domContainer);

