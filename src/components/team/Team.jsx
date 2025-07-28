import React from "react"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import Back7 from "../common/back/Back7"

const Team = () => {
  return (
    <>
      <Back7 title='Collaborations' />
      <section className='team padding'>
        <div className='container101 grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team
