import React from "react"
import Isabal from "./Isabal"
import "./price.css"
// import Faq from "./Faq"
import Back4 from "../common/back/Back4"

const Mainisabal = () => {
  return (
    <>
      <Back4 title='Isabal'/>
      <section className='price padding'>
        <div className='container101 grid6'>
          <Isabal />
        </div>
      </section>
      {/* <Faq /> */}
    </>
  )
}

export default Mainisabal