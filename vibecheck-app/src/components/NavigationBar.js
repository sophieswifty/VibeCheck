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
          <Navbar.Item href="./quiz" className='no-hover'>
            <Link className="nav-link" renderAs="a" to="./quiz">
              QUIZ
              </Link>
          </Navbar.Item>
          <Navbar.Item href="./statistics" className='no-hover'>
            <Link className="nav-link" renderAs="a" to="./statistics">
              STATISTICS
              </Link>
          </Navbar.Item>
          <Navbar.Item dropdown hoverable className='no-hover'>
            <Navbar.Item className="no-hover">
                 VIBIFY...
            </Navbar.Item>
            <Navbar.Dropdown className="navbar-item-dropdown">
              <Navbar.Item className='no-hover'>
                <Link className="drop-link" renderAs="a" to="./vibecheck-song">
                  A SONG
                  </Link>
              </Navbar.Item>
              <Navbar.Item className='no-hover'>
                <Link className="drop-link"renderAs="a" to="./vibecheck-playlist">
                  A PLAYLIST
                  </Link>
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
           <Navbar.Item className='no-hover'>
            <Link renderAs="a" to="./profile">
              {props.username}
            </Link>
          </Navbar.Item>
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
