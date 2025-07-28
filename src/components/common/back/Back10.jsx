import React from 'react'
import { useLocation } from "react-router-dom"
const Back10 = ({ title }) => {
    const location = useLocation()
  return (
    <>
      <section className='back10'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <div className='headingalign'>
        <div className='blogheading'>
        <h1>{title}</h1>
        </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back10