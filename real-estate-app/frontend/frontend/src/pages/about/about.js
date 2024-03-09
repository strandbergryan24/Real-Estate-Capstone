import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div>
      <h1>About This Applicatipon</h1>
      <p className='description'>This project was created as capstone to the software engineering immersive bootcamp. This project is a full CRUD application that is meant to emulate real estate websites. The initial design supports registered users by allowing them to create new property listings. All users are able to see all listings, and currently all users can edit and delete listings, however in the future I would like to add user authentication that makes only associated users have the autority to make those changes. For more information on the project checkout the linked repository below, where you can view all code as well as copy data in the project to test functionality.</p>
      <br />
      <a
        href="https://github.com/strandbergryan24/Real-Estate-Capstone"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'blue', textAlign: 'center', display: 'block', marginTop: '20px' }}
        className='link'
      >
        Git-Repository
      </a>


    </div>
  )
}

export default About