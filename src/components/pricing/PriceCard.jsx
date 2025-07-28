import React from "react"
import { catagory } from "../../dummydata"
import { Link } from "react-router-dom";

const PriceCard = () => {
  return (
    <>
      {catagory.map((val) => (
        <Link className="ankerTagFooter" to={`/${val.link}`}>
          <div className='items shadow'>
            <div className='img1'>
              <img src={val.picture} alt={'iedge-education-shop'+val.name} />
            </div>
            <br />
            <h4>{val.name}</h4>
            {/* <h1>
              <span>$</span>
              {val.price}
            </h1> */}
            {/* <p>{val.desc}</p> */}
            <button className='outline-btn'>ALL PRODUCT</button>
          </div>
        </Link>
      ))}
    </>
  )
}

export default PriceCard
