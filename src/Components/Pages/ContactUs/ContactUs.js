import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className="container">
      <div className="contact-us-container">
        <h2>Contact Us</h2>
        <p>we'd love to hear from you. please fill out the form below or 
          reach out to us using the contact detail provided. </p>
      </div>
      <form className='contact-form'>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name='name' id='name' required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name='email' id='email' required/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" rows='5' required></textarea>
        </div>
        <button className='btn-submit' type='submit'>Submit</button>
       
      </form>
    </div>
  )
}

export default ContactUs