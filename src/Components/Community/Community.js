import React from 'react'
import './Community.css'
import tc from '../../assets/img/tc.png'

function Community() {
  const btnHandle = ()=>{
    window.open('https://globalai.community/',"_break")
  }
  return (
    <div className="container">
      <div className="community-box">
        <div className="start-img">
          <img src={tc} alt="" />
        </div>
        <div className="start-content">
          <h2 className='section-head'> Join Our Free Tech <br /> Community</h2>
          <p>Unlock the power of knowledge and innovation by joining our vibrant and free Watsapp tech community</p>
          <button className='reg-btn' onClick={btnHandle}>Join Now</button>
        </div>
      </div>
    </div>
  )
}

export default Community