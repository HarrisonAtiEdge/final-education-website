import React from "react"
import Oxfordbook from "./Oxfordbook"
import "./price.css"

import Back4 from "../common/back/Back4"

const Mainoxford = () => {
  return (
    <>
      <Back4 title='Oxford Book'/>
      <section className='price padding'>
        <div className='container101 grid6'>
          <Oxfordbook />
        </div>
      </section>
      {/* <Faq /> */}
    </>
  )
}

export default Mainoxford
