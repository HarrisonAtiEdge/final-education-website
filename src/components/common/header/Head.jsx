import React from "react"
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom/cjs/react-router-dom.min"
const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container101 flexSB'>
          <div className='logo'>
            {/* <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span> */}
            <img src={Logo} alt="iedge-education-logo"/>
          </div>

          <div className='social'>
            {/* <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i> */}
              <a className="ankeretag" href="https://www.facebook.com/profile.php?id=61550828080088" target="blank">
            <i className='fab fa-facebook icon'></i>
            </a>
            {/* <a className="ankeretag" href="https://api.whatsapp.com/send/?phone=923343444500&text&type=phone_number&app_absent=0" target="blank">
            <i className='fab fa-instagram icon'></i>
            </a> */}
            <a className="ankeretag" href="https://pk.linkedin.com/showcase/iedge-ie/?trk=affiliated-pages" target="blank">
            <i className='fab fa-linkedin icon'></i>
            </a>
            <a className="ankeretag" href="https://api.whatsapp.com/send/?phone=923343444500&text&type=phone_number&app_absent=0" target="blank">
            <i className='fab fa-whatsapp icon'></i>
            </a>
           
            {/* <Link to='/login'>
            <i className="fa fa-plus icon" aria-hidden="true"></i>
            </Link> */}
   
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
