import React from "react"
import { useLocation } from "react-router-dom"

const Back4 = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <section className='back4'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back4
