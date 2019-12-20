import React, {useState} from "react";
import './Navbar.scss';
import Logo from './logo.jsx';

function Navbar(){

  return(
    <nav>
      <div className="nav-container">
        <ul className="top">
            <Logo />
          <li className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </li>
          <li className="end">
            <ul>
              <a href="#Home">Home</a>
              <a href="#works">Works</a>
              <a href="#About">About</a>
              <a href="#">Contact</a>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;