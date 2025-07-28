import React from "react"
import { useState } from "react";
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
import { Link } from "react-router-dom";

const OnlineCourses = () => {

  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online' />
          <div className='content grid3'>
            {online.map((val) => (
              // <Link className='ankeretag' to={`/online-details/${val.id}`}>
              <Link className='ankeretag' to={`/courses`}>
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} alt={val.courseName+`icon`} />
                    <img src={val.hoverCover} alt={val.courseName+`icon`} className='show' />
                  </div>
                  <h1>{val.courseName}</h1>
                  {/* <span>{val.course}</span> */}
                </div>
              {/* // </Link> */}
              </Link>
            ))}
          <br />
        </div>
      </div>
    </section >
    </>
  )
}

export default OnlineCourses