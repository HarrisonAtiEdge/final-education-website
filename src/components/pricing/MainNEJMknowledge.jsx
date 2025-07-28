import React from "react"
import NEJMknowledge from "./NEJMknowledge"
import "./price.css"

import Back4 from "../common/back/Back4"

const MainNEJMknowledge  = () => {
  return (
    <>
      <Back4 title='NEJM Knowledge+'/>
      <section className='price padding'>
        <div className='container101 grid6'>
          <NEJMknowledge />
        </div>
      </section>
      {/* <Faq /> */}
    </>
  )
}

export default MainNEJMknowledge
