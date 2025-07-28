import React from "react"
import "./Hero.css"
import Heading from "../../common/heading/Heading"
import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <>
      <section className='hero'>

        <div className='container101'>
          <div className='row'>
            <Heading subtitle='Unlocking Global Education and Healthcare Excellence' title='iEDGE – International Education' />
            <br /> <p>At iEDGE-International Education, we believe that education knows no boundaries, and quality healthcare is a universal right. As a pioneering
              force in the realm of international education and professional training, we are dedicated to bridging gaps, fostering
              partnerships, and unlocking opportunities for students and professionals alike. Our unwavering commitment to excellence
              has propelled us to become a trusted partner for prestigious international universities, esteemed healthcare training
              institutes, and renowned medical associations.</p>

            <div className='button'>
              <Link to={'/collaborations'} target='blank'>
                <button className='primary-btn'>OUR INTERNATIONAL AFFILIATIONS <i className='fa fa-long-arrow-alt-right'></i></button>
              </Link>
              &nbsp;&nbsp;
              <Link to={'/conferences'} target='blank'>
                <button>UPCOMING EVENTS <i className='fa fa-long-arrow-alt-right'></i></button>
              </Link>
            </div>
          </div>
        </div>

      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero


// Our International Affiliation
// Up Coming Event