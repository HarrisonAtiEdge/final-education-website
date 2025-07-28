import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import AboutCard from "./AboutCard"
import Awrapper from "./Awrapper"
import Choose from "./Choose"
import Vision from "./Vision"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <Vision />
      <div className="alignabout2">
        <AboutCard />
      </div>
      <br />
      <Choose />
      <Awrapper />
    </>
  )
}

export default About
