import React from 'react'
import Visionimg from '../assets/vision-01.png'
import '../about/Vision.css'
const Vision = () => {
  return (
    <div>
      <div className='blockcontainer'>
        <div className='visionheading'>
            <h1>Our Vision</h1>
            {/* <img src={Visionimg}/> */}
        </div>
        <div className='materialvision'>
            <p>
            Our vision is simple yet profound: to empower individuals
             with the tools, knowledge, and skills they need to excel
              in the global arena of education and healthcare. 
              We envision a world where geographical limitations
               are no longer barriers to accessing world-class 
               education and cutting-edge professional training.
                Through our partnerships and collaborations, we aspire
                 to create a more interconnected and enlightened 
                 community of learners and professionals.
            </p>
        </div>

      </div>
    </div>
  )
}

export default Vision
