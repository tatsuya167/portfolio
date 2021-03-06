// import React, {useState} from "react";
import React from "react";
import './Navbar.scss';
import Logo from './logo.jsx';

function Navbar(){
  return(
    <nav>
      <div className="nav-container">
        <ul>
          <a href="/" className="nav-bar">
            {/* <Logo /> */}
            <img src="https://img.icons8.com/wired/64/000000/mountain.png"/>
          </a>
          <li>
            <ul className="nav-menu">            
              <a href="#header">Home</a>
              <a href="#works">Works</a>
              <a href="#about">About</a>
              <a href="#address">Contact</a>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;