import React, { useState } from 'react';

const UserRegistrationForm = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>User Registration</h1>
            <form onSubmit={handleSubmit}>
                <p>Username: <input type="text" name="username" value={user.username} onChange={handleInputChange} required /></p>
                <p>Password: <input type="password" name="password" value={user.password} onChange={handleInputChange} required /></p>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export { UserRegistrationForm }