import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import Logout from './logout.js'

import './NavBar.css';

const NavBar = (props) => {
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

                {props.user ? (
                    <>
                        <h3 className='btn'>{props.user.username}</h3>
                        <Logout className="btn" setUser={props.setUser} />
                    </>
                ) : (
                    <>
                        <button className='btn'><NavLink to='/login'>Sign In</NavLink></button>
                    </>
                )}

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <NavLink className='li' to="/">Home</NavLink>
                    <NavLink className='li' to="/About" >About</NavLink>
                    {props.user ? (
                        <>
                            <NavLink className='li' to="/new">New Listing</NavLink>

                        </>
                    ) : (
                        <>
                        </>
                    )}
                </ul>

                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
