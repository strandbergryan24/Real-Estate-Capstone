import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'

const UserLoginForm = () => {
    const navigate = useNavigate();
    const url = 'http://localhost:4000/';
    const [username, setUsername] = useState('');
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(url + 'session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            if (response.ok) {
                const userData = await response.json();
                setUsername(userData.username);
                navigate('/');
            } else {
                const errorData = await response.json();
                console.error('Error logging in ', errorData);
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
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