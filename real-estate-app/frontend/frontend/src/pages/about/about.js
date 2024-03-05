import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div>
        <h1>About This Applicatipon</h1>
        <p className='description'>This project was created as capstone to the software engineering immersive bootcamp. This project is a full CRUD application that is meant to emulate real estate websites. The initial design supports registered users by allowing them to create new property listings, edit their listings and delete their listings. All users are able to see all listings, however only users who are registered will be able to edit, delete, and create new listings. For more information on the project checkout the linked repository below, where you can view all code as well as copy data in the project to test functionality.</p>
        <p  className='link'>Git-Repository: https://github.com/strandbergryan24/Real-Estate-Capstone</p>
    </div>
  )
}

export default About