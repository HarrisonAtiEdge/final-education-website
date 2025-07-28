import { useEffect, useState } from "react";
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"
import { Link } from "react-router-dom";
// import axios from 'axios'


const HAbout = () => {
  const [db_Data, setDb_Data] = useState([]);
  const fetchData = () => {
    return fetch("https://edu-db-15-may-24-git-main-fahad-khataks-projects.vercel.app/read-course")
      // return fetch("https://plum-combative-perch.cyclic.app/show-data")
      .then((response) => response.json())
      .then((data) => setDb_Data(data.allTasks));
  }
// fetchData()
  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <>
      <section className='homeAbout'>
        <div className='container101'>
          <Heading subtitle='our courses' title='explore our popular online courses' />
          <div className='coursesCard'>
            <div className='grid2'>
            {
              db_Data && db_Data.length > 0 && db_Data.slice(0, 3).map((dataObj, index) => (
                <div className='items' key={dataObj._id}>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                        <img src={dataObj.courseCategoryLogo} alt='iedge-education-cousrse-destails' />
                      </div>
                    </div>
                    <div className='text'>
                      <h2>{dataObj.title.slice(0, 50)}...</h2>
                      <div className='details'>
                            <div className='box'>
                              <div className='dimg'>
                                <img src={dataObj.courseByLogo} alt='iedge-education-cousrse-destails' />
                              </div>
                              <div className='para'>
                                <h4>{dataObj.courseBy}</h4>
                              </div>
                            </div>
                      </div>
                    </div>
                  </div>
                  <div className='price'>
                    <h3>
                      {dataObj.price.slice(0,45)}
                    </h3>
                  </div>
                  <Link to={`/courses-detail/${dataObj._id}`}>
                    <button className='outline-btn'>REGISTRATION DETAILS</button>
                  </Link>
                </div>
              ))}
   
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
