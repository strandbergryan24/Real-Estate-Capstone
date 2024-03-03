import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'

const UserRegistrationForm = ({ newUser }) => {
    const url = 'http://localhost:4000/';
    const navigate = useNavigate();
    const [formData, setFormData] = useState ({
        username: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(url + 'user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                console.log(data.message);
                navigate('/login');
            } else {
                console.error('Registration failed:', data.message);
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='userForm'> 
            <h1>Create an Account</h1>
            <form onSubmit={handleSubmit}>
                <p>Username: <input type="text" name="username" value={formData.username} onChange={handleInputChange} required /></p>
                <p>Password: <input type="password" name="password" value={formData.password} onChange={handleInputChange} required /></p>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default UserRegistrationForm