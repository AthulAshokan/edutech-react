import React from 'react'
import './Course.css'
import ai from '../../assets/img/ai.png'
import dg from '../../assets/img/dg.png'
import hacking from '../../assets/img/hacking.png'
import sd from '../../assets/img/sd.png'
function Course() {
  const cousedata = [
    {
      title:'AI DEVELOPMENT',
      discription:'Master AI Devolopment',
      img:ai,
    },
    {
      title:'DIGITAL MARKETING',
      discription:'Master Digital Marketing',
      img:dg,
    },
    {
      title:'CYBER SECURITY',
      discription:'Master Cyber Security!!!',
      img:hacking,
    },
    {
      title:'SOFTWARE DEVELOPMENT',
      discription:'Master Software Development!!!',
      img:sd,
    },

  ]
  return (
    <div className='container course-container'>
      <div className="course-top">
        <h2 className='section-title'>Our Free Courses</h2>
        <p>The Top Trending Free Courses and Certification</p>
        <div className="course-wrapper">
          {
            cousedata.map((course,index)=>
            (
              <div className="course-item" key={index}>
              <span className='course-icon'>
                <img src={course.img} alt="" />
              </span>
              <div className="course-content">
                <h4>{course.title}</h4>
                <p>{course.discription}</p>
              </div>
            </div>

            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Course