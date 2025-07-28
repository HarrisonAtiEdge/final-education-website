import React from "react"
import AccessMedicine from "./AccessMedicine"
import "./price.css"

import Back4 from "../common/back/Back4"

const MainAccessMedicine = () => {
  return (
    <>
      <Back4 title='Access Medicine'/>
      <section className='price padding'>
        <div className='container101 grid6'>
          <AccessMedicine/>
        </div>
      </section>
      {/* <Faq /> */}
    </>
  )
}

export default MainAccessMedicine
