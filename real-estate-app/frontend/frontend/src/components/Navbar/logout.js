import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = (props) => {
    const url = "http://localhost:4000/"
    const navigate = useNavigate()
    const logoutUser = async () => {
        try {
            const response = await fetch(url + 'session/logout', {
                method: 'POST',
            })

            if (response.ok) {
                props.setUser(null)
            } else {
                console.log("Log out failed" + error)
            }
        } catch (error) {
            console.error('Error logging out:', error)
        }
    }
    return (
        <button onClick={logoutUser} className='btn'>
            Logout
        </button>
    )
}

export default Logout