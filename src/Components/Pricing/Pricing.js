import React from 'react'
import "./Pricing.css"

function Pricing() {
  const handleJoin = ()=>(
    window.open("https://senseilms.com/online-course-examples/",'_blank')
  )
  const pricingData = [
    {
      title:'Regular Member',
      price:'$0',
      duration :'/month',
      color: '#fff',
      features : [
        'Unlimited access to the Courses',
        'Customer Support',
        'Personal Mentor', 
        'Standard option',
        '5 classes per week'
      ]
    },
    {
      title:'Premium Member',
      price:'$0',
      duration :'/month',
      color: '#6f55f2',
      features : [
        'Unlimited access to the Courses',
        'Customer Support',
        'Personal Mentor', 
        'Standard option',
        '5 classes per week',
      ]
    },
    {
      title:'Standard Member',
      price:'$0',
      duration :'/month',
      color: '#fff',
      features : [
        'Unlimited access to the Courses',
        'Customer Support',
        'Personal Mentor', 
        'Standard option',
        '5 classes per week'
      ]
    },
  ]
  
  return (
    <div className="container">
      <div className="pricing-top">
        <h2 className='section_title'>Premium Pricing Plan</h2>
        <p>Unlock elite service with our Premium Pricing Plan and soar ahead of the competion </p>
      </div>
      <div className="pricing-wrapper">
        {
          pricingData.map((pricingitem,index)=>(
          <div className="pricing-item" key={index}>
            <div className="pricing-card-top" style={{background:pricingitem.color}}>
                <h2 className='section-title'>{pricingitem.title}</h2>
                <h2 className='.pricing'>
                  {pricingitem.price} <span>{pricingitem.duration}</span>
                </h2>
            </div>

            <div className="services">
              <ul>
                {
                  pricingitem.features.map((feature,index)=>
                    (
                      <li key={index}>{feature}</li>
                    ))
                }
  
              </ul>
              <button className='reg-btn' onClick={handleJoin}>Join</button>
            </div>
          </div>
          ))
        }

      </div>
    </div>
  )
}

export default Pricing