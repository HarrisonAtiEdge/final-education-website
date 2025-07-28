import React from "react"
import PriceCard from "./PriceCard"
import "./price.css"
// import Faq from "./Faq"
import Back4 from "../common/back/Back4"

const Pricing = () => {
  return (
    <>
      <Back4 title='Your Educational Hub' />
      <section className='price padding'>
        <div className='container101 grid6'>
          <PriceCard />
        </div>
      </section>
      {/* <Faq /> */}
    </>
  )
}

export default Pricing
