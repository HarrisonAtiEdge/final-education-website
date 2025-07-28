import { useEffect, useState } from "react";
import "../blog/blog.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"
import { Link } from "react-router-dom";
// copy code of blog => blogCard

const Hblog = () => {
  const [db_Data, setDb_Data] = useState([]);

  const fetchData = () => {
    return fetch("https://edu-db-15-may-24-git-main-fahad-khataks-projects.vercel.app/show-data")
      // return fetch("https://tiny-pink-rhinoceros-sari.cyclic.app/show-data")
      .then((response) => response.json())
      .then((data) => setDb_Data((data.allTasks)));
  }
  useEffect(() => {
    fetchData();
  }, fetchData)

  return (
    <>
      <section className='blog'>
        <div className='container101'>
          <Heading subtitle='Conferences' title='Upcoming  Conferences' />
          <div className='grid2'>
          {
              db_Data && db_Data.length > 0 && db_Data.slice(0, 3).map((dataObj, index) => (
         
              <Link to={`/conferences-detail/${dataObj._id}`}>
                <div className='items shadowbox'>
                  <div className='img'>
                    <img src={dataObj.conferenceImage} alt='iedge-education-conference-image' />
                  </div>
                  <div className='text'>
                  <div className='admin flexSB'>
                <span>
                  <i className='fa fa-map-marker'></i>
                  <label htmlFor=''>{dataObj.country}</label>
                </span>
                <span>
                  <i className='fa fa-calendar-alt'></i>
                  <label htmlFor=''>{dataObj.startDate}</label>
                </span>
                <span>
             
                  <i className='fa fa-calendar-alt'></i>
                  <label htmlFor=''>{dataObj.endDate}</label>
                </span>
              </div>
              <h1>{dataObj.title.slice(0,35)}</h1>
              <p>{dataObj.subTitle.slice(0,29)}...</p>
                  </div>
                </div>
              </Link>
           
            ))}
    
          </div>
        </div>
      </section>
    </>
  )
}

export default Hblog
