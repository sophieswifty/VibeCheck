import React from 'react';
import './NavigationBar.css'
import { Link } from 'react-router-dom';
import { Navbar, Loader, Heading } from 'react-bulma-components';
import Logout from './Logout';

function NavigationBar(props) {
  const [isActive, setisActive] = React.useState(false);
  return (
    <Navbar className="main-nav">
      <Navbar.Brand transparent>
        <div className="dash-logo">
          <Link renderAs="a" to="/dashboard">
            {/* <img src="./temp_vc.png" width="200" /> */}
            <div className="dash-logo"><h1>▼ibec❚❚eck</h1></div>
          </Link>
        </div>
      </Navbar.Brand>
      <Navbar.Menu className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
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
          {props.loadingData && <Navbar.Item className='name-no-hover'>
            <p>Syncing vibes with {props.username}</p>
            <Loader />
          </Navbar.Item>}
          {!props.loadingData && <Navbar.Item className='name-no-hover'>
            <Link renderAs="a" to="./profile">
              {props.username}
            </Link>
          </Navbar.Item>}
          <Navbar.Item className='btn-no-hover'>
            <Logout />
          </Navbar.Item>

        </Navbar.Container>
      </Navbar.Menu>
      <Navbar.Burger className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} onClick={() => {
        setisActive(!isActive)
      }} />
    </Navbar>
  );
}

export default NavigationBar;
