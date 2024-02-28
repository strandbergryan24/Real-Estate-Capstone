import React, {useState} from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {BsFillHouseFill} from 'react-icons/bs';
import { Link } from 'react-router-dom'
import './NavBar.css';

// link imports 
import About from '../../pages/about/about.js'

const NavBar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span><BsFillHouseFill />Real</span>Estate</h1>
            <button className='btn'>Sign In</button>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <Link className='li' to="/">Home</Link>
                <Link className='li' to="About" >About</Link>
                <Link className='li' to="">New Listing</Link>
                <Link className='li' to="">Sign Out</Link>
            </ul>
            <div className='hamburger' onClick={handleClick}> 
                {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon'/>)}
            </div>
        </div>    
    </div>
  )
}

export default NavBar
