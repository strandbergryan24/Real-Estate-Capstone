import React from 'react'
import { useState } from 'react'
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

function App(props) {

  const [user, setUser] = useState(null);
  return (
    <Router>
      <div>
        <NavBar user={user} setUser={setUser} />
        <Hero />
        <UserLoginForm user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={ <Featured /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/edit' element={ <EditListing /> } />
          <Route path='/show' element={ <ShowListingPage /> } />
          <Route path='/register' element={ <UserRegistrationForm /> } />
          <Route path='/new' element={ <ListingForm /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

