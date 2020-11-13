import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Button } from './Button';
import Navbar from '../../node_modules/react-bulma-components/lib/components/navbar/navbar';


export default class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <NavbarItem linkTo="/">
              <img src="./temp_vc.png" width="190" />
            </NavbarItem>

            <span class="navbar-burger burger" data-target="navbarMenuHeroB">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-start">
              <NavbarItem linkTo="/quiz">
                Quiz
              </NavbarItem>

              <NavbarItem linkTo="/custom">
                Custom playlist
              </NavbarItem>

              <NavbarItem linkTo="/statistics">
                Quiz
              </NavbarItem>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">

                <div class="navbar-item has-dropdown is-hoverable">
                  <NavbarItem linkTo="/profile">
                    Profile
                  </NavbarItem>

                  <div class="navbar-dropdown">
                    <NavbarItem linkTo="/playlists">
                      playlists
                    </NavbarItem>
                    <NavbarItem linkTo="/friends">
                      friends
                    </NavbarItem>
                    <hr class="navbar-divider" />
                    <NavbarItem linkTo="/">
                      Log out
                    </NavbarItem>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </nav>
      </div >
    )
  }
}

class NavbarItem extends React.Component {

  render() {
    return (
      <div class="navbar-item">
      <Nav.Item>
        <Nav.Link>
          <Link to={this.props.linkTo} style={{ textDecoration: 'none' }}>{this.props.children}</Link>
        </Nav.Link>
      </Nav.Item>
      </div>
    )
  }
}
