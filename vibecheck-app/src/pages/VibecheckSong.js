import React from 'react';
import {Heading, Form, Button, Hero} from 'react-bulma-components';

export default class VibecheckSong extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('The following song was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render() {
        return (
            <div>
                <Hero color="primary">
                    <Hero.Body>
                        <Heading>
                            Vibecheck a song
                        </Heading>
                        <Form.Field grouped>
                            <Form.Control>
                                <Form.Input  type="text" value={this.state.value} onChange={this.handleChange}></Form.Input>
                            </Form.Control>
                            <br/>
                            <Form.Control>
                                <Button rounded onClick={this.handleSubmit}>Submit</Button>
                            </Form.Control>
                        </Form.Field>
                        <p>
                            The user will be able to type in a song and when they hit enter below the form the cover art 
                            cover of the song will be displayed, along with all metrics for the song. This will fulfill
                            the auto-complete requirement of the assignment
                        </p>
                    </Hero.Body>
                </Hero>
                <Heading>
                    Song Stats and Song Cover
                </Heading>
                <p>
                    Here is where we will display the song cover and metrics.
                    Maybe use fancy pie or bar charts?
                </p>
            </div>);
    }
}