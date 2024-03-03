import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(''); 

    const handleClick = () => setClick(!click);

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername('');
    };

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Real</span>Estate</h1>
                {username ? <p>Welcome, {username}</p> : <button className='btn'><Link to="/Login">Sign In</Link></button>}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <Link className='li' to="/">Home</Link>
                    <Link className='li' to="/About" >About</Link>
                    <Link className='li' to="/New">New Listing</Link>
                    {loggedIn && <li className='li' onClick={handleLogout}>Sign Out</li>}
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
