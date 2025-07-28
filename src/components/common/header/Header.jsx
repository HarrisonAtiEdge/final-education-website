import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import AuthDetails from "../../Authentication/AuthDetails"

const Header = () => {
  const [click, setClick] = useState(false)
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/collaborations'>Collaborations</Link>
            </li>
            <li>
              <Link to='/partners'>Partners</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            <li>
              <Link to='/conferences'>Conferences</Link>
            </li>
            {/* <li>
              <Link to='/login'>Observatory Programs</Link>
            </li> */}
            <li>
              <Link to='/new'>Blog</Link>
            </li>
            <li>
              <Link to='/shop'>Shop</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/faqs'>FAQs</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>
              {/* <Link to={'/login'} target='blank'> */}
              {/* <button className='primary-btn'>LOGIN</button> */}
              <AuthDetails />
              {/* </Link> */}
            </div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
