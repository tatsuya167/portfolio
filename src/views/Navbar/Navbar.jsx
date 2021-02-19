import React, {useState} from "react";
import './Navbar.scss';
import Logo from './logo.jsx';

function Navbar(){
// eslint-disable-next-line
  return(
    <nav>
      <div className="nav-container">
        <ul>
          <a href="/" className="nav-bar">
            <Logo />
          </a>
          <li>
            <ul className="nav-menu">            
              <a href="#Home">Home</a>
              <a href="#works">Works</a>
              <a href="#About">About</a>
              <a href="#Contact">Contact</a>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;