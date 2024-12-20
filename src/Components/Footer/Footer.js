import React from 'react'
import footer from '../../assets/img/footer.png'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  const handleLink = ()=>{
    window.scrollTo(0,0)
  }
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
              <a href=""><Link to='/cource'>Our programs </Link></a>
            </li>
            <li>
              <a href=""><Link to='/service'>Our plans</Link></a>
            </li>
            <li>
              <a href=""><Link to='/aboutus'>become a member</Link></a>
            </li>
          </ul>
        </div>

        <div className="footer-box">
          <h4 className='footer-title'>Quick links</h4>
          <ul className='footer-link'>
            <li>
              <a href=""><Link to='/aboutus'onClick={handleLink} >About US</Link>  </a>
            </li>
            <li>
              <a href=""><Link to='/contactus'onClick={handleLink}>Contact US</Link> </a>
            </li>
            <li>
              <Link to='/support' onClick={handleLink}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>


   </footer>
  )
}

export default Footer
