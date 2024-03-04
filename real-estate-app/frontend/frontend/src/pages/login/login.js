import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import './login.css'
import Login from './loginForm.js'

const UserLoginForm = (props) => {
    const navigate = useNavigate();
    const url = 'http://localhost:4000/';

    // const [loginData, setLoginData] = useState({
    //     username: '',
    //     password: ''
    // });



    const handleLogin = async (username, password) => {

        try {
            const response = await fetch(url + 'session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const userData = await response.json();
                props.setUser({
                    username: userData.user.username
                })
                navigate('/');
            } else {
                const errorData = await response.json();
                console.error('Error logging in ', errorData);
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return(
        <>
            <Routes>
                <Route path='/login' element={ < Login handleLogin={ handleLogin }/> }></Route>
            </Routes>
        </>
    )
}

export default UserLoginForm;