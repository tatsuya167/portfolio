import React from 'react';
import './App.css';

import Header from "./views/Header/Header.jsx"
import Works from "./views/Works/Works.jsx"
import About from "./views/About/About.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <Works />
      <About />
    </div>
  );
}

export default App;
