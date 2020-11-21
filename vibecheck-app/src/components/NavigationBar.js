import React from 'react';
import './NavigationBar.css'
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';
import Logout from './Logout';

function NavigationBar(props) {
  return (
    <Navbar className="main-nav">
      <Navbar.Brand transparent>
        <Navbar.Item className='btn-no-hover'>
          <Link renderAs="a" to="/dashboard">
            {/* <img src="./temp_vc.png" width="200" /> */}
            <div className="dash-logo"><h1>▼ibec❚❚eck</h1></div>
          </Link>
        </Navbar.Item>
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
              <Link className="nav-link" to="./vibecheck-song">
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
          <Navbar.Item className='name-no-hover'>
            {props.username}
          </Navbar.Item>
          <Navbar.Item className='btn-no-hover'>
            <Logout />
          </Navbar.Item>
      
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}

export default NavigationBar;
