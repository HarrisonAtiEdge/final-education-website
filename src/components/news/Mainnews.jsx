import React from "react"
import News from "./News"
import "../../components/pricing/price.css"
// import pr from '../'
// import Faq from "./Faq"
import Back4 from "../common/back/Back4"
import './News.css'

const Mainnews = () => {
  return (
    <>
      <Back4 title='Blogs' />
        <div className="align">
        <div className="newsalign" >
          <News />
          </div>
          </div>

      {/* <Faq /> */}
    </>
  )
}

export default Mainnews
