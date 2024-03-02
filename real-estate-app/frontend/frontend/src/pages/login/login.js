import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'

const UserLoginForm = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <div className='userForm'> 
            <h1>User Login</h1>
            <form onSubmit={handleLogin}>
                <p>Username: <input type="text" name="username" value={loginData.username} onChange={handleInputChange} required /></p>
                <p>Password: <input type="password" name="password" value={loginData.password} onChange={handleInputChange} required /></p>
                <button className='btn' type="submit">Login</button>
            </form>
            <h3><Link to='/Register'>Create Account</Link></h3>
        </div>
    );
};

export default UserLoginForm;