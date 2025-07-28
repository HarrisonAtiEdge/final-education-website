import React from "react"
import { team } from "../../dummydata"
import { Link } from "react-router-dom";
const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt={val.title} />
            <div className='overlay'>
              {/* <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-tiktok icon'></i> */}
              <a className="ankeretag" href="https://pk.linkedin.com/showcase/iedge-ie/?trk=affiliated-pages" target="blank">
              <i className='fab fa-linkedin icon'></i>
              </a>
              <a className="ankeretag" href="https://api.whatsapp.com/send/?phone=923343444500&text&type=phone_number&app_absent=0" target="blank">
              <i className='fab fa-whatsapp icon'></i>
              </a>
            </div>
          </div>
          <Link to={`/readmore-detail/${val.id}`} className='linking'>
          <div className='details'>
            <h2>{val.name} &nbsp;&nbsp;<i className='fa fa-long-arrow-alt-right'></i></h2>
          </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default TeamCard
