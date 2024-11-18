import React from 'react'
import './About.css'
import athul from '../../../assets/img/athul.jpeg'

function About() {
  return (
    <div className="container">
      <div className="about-us-container">
        <div className="team-members">
          <h2>Our Team</h2>
          <div className="member-card">
            <img className='member-image' src={athul} alt="" />
            <h3 className='member-name'>Athul T Ashok</h3>
            <p className='member-role'>co founder</p>
          </div>
        </div>
        <div className="about-us-discription">
          <h2 className='discription-head'>About Us</h2>
          <p>
            At Edutech, we are dedicated to revolutionizing the way people learn by blending education with innovative technology. Our mission is to make learning more accessible, interactive, and enjoyable for everyone. With a focus on quality and user experience, we strive to create tools that empower learners and educators alike. Collaboration and creativity drive everything we do as we work to shape the future of education. Join us on this journey to make knowledge a gateway to endless opportunities
          </p>
        </div>
      </div>
    </div>
  )
}

export default About