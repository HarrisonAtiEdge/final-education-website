import React from 'react'
import Laptopview from '../assets/laptop.png'
import Extensive from '../assets/icon-01.png'
import Holistic_Learning from '../assets/icon-03.png'
import Global_Exposure from '../assets/icon-02.png'
import Professional_Growth from '../assets/icon-04.png'
import '../about/Choose.css'
const Choose = () => {
    return (
        <div>
            <div className='Events-Heading'>
                <h1>Why Choose iEDGE?</h1>
            </div>
            <div className="Vision-container"> 
                <div className="Vision-card">
                <div className='materialalign'>
                    <div className='imagepadding'>
                        <img className='imgsize' src={Extensive} alt="iedge-education-Extensive-Partnerships" />
                    </div>
                    <div className='backcolor'>
                    <div className='matter'>
                        <h3>Extensive Partnerships</h3>
                        <p>Our network of international universities and professional training institutes
                            provides a plethora of choices, ensuring that individuals can find the right
                            educational and training pathways to suit their needs.</p>
                    </div>
                    </div>
                    </div>
                    <div className='materialalign'>
                    <div className='imagepadding'>
                        <img className='imgsize' src={Holistic_Learning} alt="iedge-education-Holistic-Learning" />
                    </div>
                    <div className='backcolor'>
                    <div className='matter'>
                        <h3>Holistic Learning</h3>
                        <p>We understand that education and healthcare are intertwined.
                            Our approach combines academic rigor with practical insights,
                            equipping learners with a well-rounded understanding of their
                            chosen field.</p>
                    </div>
                    </div>
                    </div>
                    <div className='materialalign'>
                    <div className='imagepadding'>
                        <img className='imgsize' src={Global_Exposure} alt="i-education-Global-Exposure" />
                    </div>
                    <div className='backcolor'>
                    <div className='matter'>
                        <h3>Global Exposure</h3>
                        <p>Through our partnerships and conferences, we facilitate exposure
                            to global trends, best practices, and diverse perspectives, enriching
                            the learning experience and broadening horizons.</p>
                    </div>
                    </div>
                    </div>
                    <div className='materialalign'>
                    <div className='imagepadding'>
                        <img className='imgsize' src={Professional_Growth} alt="iedge-education-Professional-Growth" />
                    </div>
                    <div className='backcolor'>
                    <div className='matter'>
                        <h3>Professional Growth</h3>
                        <p>For healthcare professionals, we offer tailored training
                            opportunities that contribute to career advancement and excellence
                            in patient care.</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="Besttreat-card">
                    <div className='laptoppadding'>
                        <img src={Laptopview} alt="iedge-education-website" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Choose
