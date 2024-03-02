import React from 'react'
import NavBar from './components/Navbar/NavBar';
import Hero from './components/Hero/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "../src/pages/about/about.js"
import Featured from "../src/pages/index/index.js"
import UserLoginForm from "../src/pages/login/login.js"
import EditListing from "../src/pages/edit/edit.js"
import ShowListingPage from "../src/pages/show/show.js"
import UserRegistrationForm from "../src/pages/register/register.js"
import ListingForm from "../src/pages/new/new.js"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Hero />
        <Routes>
          <Route path='/' Component={ Featured } />
          <Route path='/About' Component={ About } />
          <Route path='/Login' Component={ UserLoginForm } />
          <Route path='/Edit' Component={ EditListing } />
          <Route path='/Show' Component={ ShowListingPage } />
          <Route path='/Register' Component={ UserRegistrationForm } />
          <Route path='/New' Component={ ListingForm } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

