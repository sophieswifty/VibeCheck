import React from 'react';
import { debounce } from 'throttle-debounce';
import { Form, Columns, Media, Box, Section, Container, Image } from 'react-bulma-components'
import './Autocomplete.css'
import { songSearch } from '../API/spotifyAPI';
import { playlistSearch } from '../API/spotifyAPI';

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
    // Call the appropriate fetch function whether getting a playlist or a song
    if (this.props.searchType === "song") {
      songSearch(q).then( (r) => {
        const results = [];
        r.tracks.items.forEach( (track) => {
          results.push(track);
          this.setState({results: results.slice(0, 5)});
        });
      }).catch( (e) => {
        console.log(e);
      });
    } else if (this.props.searchType === "playlist") {
      playlistSearch(q).then( (r) => {
        const results = [];
        r.playlists.items.forEach( (playlist) => {
          results.push(playlist);
          this.setState({results: results.slice(0, 5)});
        });
      }).catch( (e) => {
        console.log(e);
      });
    }
  };

  handleSubmit = (s) => {
    this.setState({q: ""});
    this.props.onSubmit(s);
  }

  render() {
    return (
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
                {/* Get the result string depending on whether you're searching a playlist or a song */}
                let resultString;
                if (this.props.searchType === "song") {
                  resultString = `${s.artists[0].name} - ${s.name}`
                } else if (this.props.searchType === "playlist") {
                  resultString = `${s.owner.display_name} - ${s.name}`
                }

                return (
                <Columns.Column className="is-full" key={s + i}>
                  <Box className="suggestion" onClick={(e) => this.handleSubmit(s)}>
                      <div className="media-left">
                        {resultString}
                      </div>
                  </Box>
                </Columns.Column>
                );
              })
            }
          </Columns>
        </Container>
    );
  }
}
