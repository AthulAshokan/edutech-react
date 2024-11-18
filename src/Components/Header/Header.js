import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo.webp'
import { Link } from "react-router-dom"; 

function Header() {
  const nav_item = [
    {
      path:'/', display:'Home'
    },
    {
      path:'/service', display:'Service'
    },
    {
      path:'/cource', display:'Cources'
    },
    {
      path:'/aboutus', display:'About Us'
    },
  ]
  return (
    <header className='header'>
    <div className="container">
      <div className="container-nav">
        <div className="logo">
          <div className="logo-img">
            <img src={logo} alt="" />
          </div>
          <h2>EduTech AI</h2>
        </div>
        <div className="navigation">
          <ul className='menu'>
            {
              nav_item.map((item)=>(
                <li className='nav-item'> <Link to={item.path} >{item.display}</Link> </li>
              ))
            }
     
          </ul>
        
        </div>
      </div>
    </div>

    </header>

  )
}

export default Header