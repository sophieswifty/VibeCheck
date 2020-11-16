import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../node_modules/react-bulma-components/lib/components/navbar/navbar';

export default class NavigationBar extends React.Component {
  render() {
    return (
    <Navbar color="primary">
        <Navbar.Brand transparent>
          <Navbar.Item>
            <Link renderAs="a" to="/">
              <img src="./temp_vc.png" width="190" />
            </Link>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu >
          <Navbar.Container>
            <Navbar.Item>
              <Link renderAs="a" to="./quiz">
              Quiz
              </Link>
            </Navbar.Item>
            <Navbar.Item renderAs="a">
              <Link renderAs="a" to="./profile">
              Profile
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
                Tools
                </Link>
              </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item>
                  <Link renderAs="a" to="./vibecheck-song">
                  Vibecheck a song
                  </Link>
                </Navbar.Item>
                <Navbar.Item>
                <Link renderAs="a" to="./vibecheck-playlist">
                  Vibecheck a playlist
                  </Link>
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
          </Navbar.Container>
          {/* <Navbar.Container position="end">
            <Navbar.Item>
              <Link to="./quiz">
              </Link>
            </Navbar.Item>
          </Navbar.Container> */}
        </Navbar.Menu>
      </Navbar>
    )
  }
}
