import React from 'react'
import meta from '../../assets/img/meta.jpeg'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import './Home.css'
import Course from '../Course/Course'

import Pricing from '../Pricing/Pricing'
import Community from '../Community/Community'

function Home() {
  const handlebutton = ()=>{
    window.open("https://ai.google/discover/blogs/",'_blank')
  }
  return (
    <>
    <section>
      <div className="container">
        <div className="home-container">
          <div className="home-content">
            <h3 className='content-title'>
              Learn For Everything  Free !!
            </h3>
            <p>
              Master Trending Technologies with EduTech AI ,Invest Your Time and return skills
            </p>
            <div className="content-btn">
              <button className='reg-btn' onClick={handlebutton}>
                Get Started 
              </button >
              <button className='reg-btn' onClick={handlebutton}>
                Watch Now!
              </button>
            </div>
          </div>
          <div className="home-img">
            <div className="home-img-wrapper">
              <div className="box-01">
                <div className="box-img">
                  <img src={meta} alt="" />
                </div>
              </div>
              <div className="watsapp-container">
                <h5>500+ Student</h5>
                <AiOutlineWhatsApp color='green'/>
              </div>
              <div className="support">
                <h5>Active Support</h5>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
    <Course/>
    <Community/>
    <Pricing/>
    </>
  )
}

export default Home