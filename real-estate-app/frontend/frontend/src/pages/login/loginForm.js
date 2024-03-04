import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './login.css'

const Login = ({handleLogin}) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleInputChange = (e) => {
        if (e.target.name === "username" ) {
            setUsername(e.target.value)
        } else if (e.target.name === 'password'){
            setPassword(e.target.value)
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        handleLogin(username, password)
    }

    return(
        <div className='userForm'>
            <h1>User Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleInputChange} 
                    placeholder='username'
                />
                <br />
                <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleInputChange} 
                    placeholder='password'
                />
                <br />
                <button className='btn' type="submit">Login</button>
            </form>
            <h3><Link to='/register'>Create Account</Link></h3>
        </div>
    )
}

export default Login;