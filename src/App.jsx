import React from 'react';
import './App.css';

import Navbar from "./views/Navbar/Navbar.jsx"
import Header from "./views/Header/Header.jsx"
import Works from "./views/Works/Works.jsx"
import About from "./views/About/About.jsx"
import Address from "./views/Address/Address.jsx"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Works />
      <About />
      <Address/>
    </div>
  );
}

export default App;
