import React from 'react'
import NavBar from './components/Navbar/NavBar';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "../src/pages/about/about.js"
import Featured from "../src/pages/index/index.js"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Hero />
        <Routes>
          <Route path='/' Component={ Featured } />
          <Route path='/About' Component={ About } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

