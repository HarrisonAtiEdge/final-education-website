import React from "react"
import Anantomica from "./anantomica"
import "./price.css"

import Back4 from "../common/back/Back4"

const Main3Danantomica = () => {
  return (
    <>
      <Back4 title='3D Anantomica'/>
      <section className='price padding'>
        <div className='container101 grid6'>
          <Anantomica />
        </div>
      </section>
      {/* <Faq /> */}
    </>
  )
}

export default Main3Danantomica
