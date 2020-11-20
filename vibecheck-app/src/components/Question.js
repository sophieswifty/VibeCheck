import React from 'react';
import { Section, Container, Image } from 'react-bulma-components'
import './Question.css';

export default class Question extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Section>
                <Container>
                <div className="box">
                    <p className="title">HELLO TYPE YOU RQUESTION HERE THIS IS WHAT IT WILL LOOK LIKE</p>
                </div>
                <div className="tile is-ancestor">
                        <div className="tile is-parent is-vertical">
                            <div className="tile is-child box">
                            <figure>
                                    <img src="https://bulma.io/images/placeholders/128x128.png" className="answer-image"/>
                                    <p className="subtitle">{this.props.question.questionText}</p>
                                </figure>
                            </div>
                            <div className="tile is-child box">
                            <figure>
                                    <img src="https://bulma.io/images/placeholders/128x128.png" className="answer-image"/>
                                    <p className="subtitle"></p>
                                </figure>
                            </div>
                        </div>

                        <div className="tile is-parent is-vertical">
                            <div className="tile is-child box">
                            <figure>
                                    <img src="https://bulma.io/images/placeholders/128x128.png" className="answer-image"/>
                                    <p className="subtitle">Question 1</p>
                                </figure>
                            </div>
                            <div className="tile is-child box">
                                <figure>
                                    <img src="https://bulma.io/images/placeholders/128x128.png" className="answer-image"/>
                                    <p className="subtitle">Question 1</p>
                                </figure>
                            </div>
                        </div>
                </div>
                </Container>
            </Section>
        )
    }
}