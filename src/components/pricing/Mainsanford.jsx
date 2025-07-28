import React from "react"
import Sanfordguide from "./Sanfordguide"
import "./price.css"
// import Faq from "./Faq"
import Back4 from "../common/back/Back4"

const Mainsanford = () => {
  return (
    <>
      <Back4 title='Sanford Guide'/>
      <section className='price padding'>
        <div className='container101 grid6'>
          <Sanfordguide />
        </div>
      </section>
      {/* <Faq /> */}
    </>
  )
}

export default Mainsanford
