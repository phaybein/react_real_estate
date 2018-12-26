import React, { Component } from 'react';
import './_nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav id="nav" className="nav">
        <div className="nav__container container">
          <img src="#!" className="nav__logo" alt="company logo" />

          <div className="nav__links">
            <a href="#!" className="nav__link--1 nav__link">
              Create Ads
            </a>
            <a href="#!" className="nav__link--2 nav__link">
              About Us
            </a>
            <a href="#!" className="nav__link--3 nav__link">
              Log In
            </a>
            <a href="#!" className="btn btn--primary">
              Register
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
