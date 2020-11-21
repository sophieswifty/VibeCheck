import React from 'react';
import { debounce } from 'throttle-debounce';
import { Form, Columns, Media, Box, Section, Container, Tile } from 'react-bulma-components'
import './Autocomplete.css'

// use songSearch() and findSongById(id) from API

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      q: "",
      results: [],
    };
    this.autocompleteSearchDebounced = debounce(300, this.autocompleteSearch);
  }

  changeQuery = event => {
    this.setState({ q: event.target.value }, () => {
      this.autocompleteSearchDebounced(this.state.q);
    });
  };

  autocompleteSearch = q => {
    this._fetch(q);
  };

  _fetch = q => {
    // Fetch results here
    const results = ["Jingle Bells", "Christmas Tree", "on the first day of christams"];
    this.setState({results: results});
  };

  handleSubmit = (s) => {
    this.setState({q: ""});
    this.props.onSubmit(s);
  }

  render() {
    return (
      <Section>
        <Container>
          <Columns gapless>
            <Columns.Column className="is-full">
              <Form.Field grouped>
                <Form.Control>
                  <Form.Input 
                    placeholder="Search for a song here"
                    type="text" 
                    value={this.state.q} 
                    onChange={this.changeQuery}>  
                  </Form.Input>
                </Form.Control>
                <Form.Control>
                </Form.Control>
              </Form.Field>
            </Columns.Column>
            {this.state.q.length > 0 &&
              this.state.results.map((s, i) => {
                return (
                <Columns.Column className="is-full" key={s + i}>
                  <Box className="suggestion" onClick={(e) => this.handleSubmit(s)}>
                    <Media>
                      <div>
                        {s}
                      </div>
                    </Media>
                  </Box>
                </Columns.Column>
                );
              })
            }
          </Columns>
        </Container>
      </Section>
    );
  }
}
