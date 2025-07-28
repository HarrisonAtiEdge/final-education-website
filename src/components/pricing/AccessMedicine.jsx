import React from "react"
import { accessmedicine } from "../../dummydata"
import { Link } from "react-router-dom";

const AccessMedicine = () => {
  return (
    <>
      {accessmedicine.map((val) => (
        <Link className="ankerTagFooter" to={`/accessdetail/${val.id}`}>
          <div className='items shadow'>
            <div className='img1'>
              <img src={val.picture} alt={'iedge-education-shop'+val.name} />
            </div>
            <br />
            <h4>{val.name}</h4>
           
            <button className='outline-btn'>PRODUCT DETAILS</button>
          </div>
        </Link>
      ))}
    </>
  )
}
export default AccessMedicine