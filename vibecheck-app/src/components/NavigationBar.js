import React from 'react';
import './NavigationBar.css'
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';
import Logout from './Logout';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar color="primary">
        <Navbar.Brand transparent>
          <Link renderAs="a" to="/">
            <img src="./temp_vc.png" width="190" />
          </Link>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu >
          <Navbar.Container>
            <Navbar.Item href="./quiz">
              <Link renderAs="a" to="./quiz">
                Quiz
              </Link>
            </Navbar.Item>
            <Navbar.Item href="./statistics">
              <Link renderAs="a" to="./statistics">
                Statistics
              </Link>
            </Navbar.Item>
            <Navbar.Item dropdown hoverable>
              <Navbar.Link>
                <Link>
                  Vibify...
                </Link>
              </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item>
                  <Link renderAs="a" to="./vibecheck-song">
                    a Song
                  </Link>
                </Navbar.Item>
                <Navbar.Item>
                  <Link renderAs="a" to="./vibecheck-playlist">
                   a Playlist
                  </Link>
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Logout />
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    )
  }
}
