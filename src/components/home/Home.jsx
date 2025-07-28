import React from "react"
import AboutCard from "../about/AboutCard"
import Awrapper from "../about/Awrapper"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <div className="aligmentabout">
      <AboutCard />
      </div>
      <Awrapper />
      <HAbout />
      {/* <Testimonal /> */}
      <Hblog />
      <br/> 
      <br/> 
      {/* <Hprice /> */}
    </>
  )
}

export default Home
