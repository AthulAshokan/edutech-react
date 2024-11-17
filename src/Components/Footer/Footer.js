import React from 'react'
import footer from '../../assets/img/footer.png'
import './Footer.css'
function Footer() {
  return (
   <footer className='footer'>
    <div className="container">
      <div className="footer-wrapper">
        <div className="footer-box">
          <div className="logo">
            <div className="logo-img">
              <img src={footer} alt="" />
            </div>
            <h3>EduTech</h3>
          </div>
          <p>Embrace the future of innovation and technology with our cutting-edge tech business solution</p>
        </div>
        <div className="footer-box">
          <h4 className='footer-title'>company</h4>
          <ul className='footer-link'>
            <li>
              <a href="">Our programs </a>
            </li>
            <li>
              <a href="">Our plans</a>
            </li>
            <li>
              <a href="">become a member</a>
            </li>
          </ul>
        </div>

        <div className="footer-box">
          <h4 className='footer-title'>Quick links</h4>
          <ul className='footer-link'>
            <li>
              <a href="">About US</a>
            </li>
            <li>
              <a href="">Contact US</a>
            </li>
            <li>
              <a href="">Suppot</a>
            </li>
          </ul>
        </div>
      </div>
    </div>


   </footer>
  )
}

export default Footer
