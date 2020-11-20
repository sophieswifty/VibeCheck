import React from 'react';
import './NavigationBar.css'
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';
import Logout from './Logout';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar className="main-nav">
        <Navbar.Brand transparent>
          <Link renderAs="a" to="/dashboard">
            {/* <img src="./temp_vc.png" width="200" /> */}
            <div class="dash-logo"><h1>▼ibec❚❚eck</h1></div>
          </Link>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu >
          <Navbar.Container>
            <Navbar.Item href="./quiz" className="navbar-item-button">
              <Link className="nav-link" renderAs="a" to="./quiz">
                Quiz
              </Link>
            </Navbar.Item>
            <Navbar.Item href="./statistics" className="navbar-item-button">
              <Link className="nav-link" renderAs="a" to="./statistics">
                Statistics
              </Link>
            </Navbar.Item>
            <Navbar.Item dropdown hoverable className="navbar-item-button">
              <Navbar.Link className="navbar-item-button">
                <Link className="nav-link" >
                  Vibify...
                </Link>
              </Navbar.Link>
              <Navbar.Dropdown className="navbar-item-dropdown">
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
            <Navbar.Item className='btn-no-hover'>
            <Logout/>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    )
  }
}
