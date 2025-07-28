import { useEffect, useState } from "react";
import React from "react"
import { blog } from "../../dummydata"
import { Link } from "react-router-dom";

const BlogCard = () => {

  
  const [db_Data, setDb_Data] = useState([]);

  const fetchData = () => {
    return fetch("https://edu-db-15-may-24-git-main-fahad-khataks-projects.vercel.app/show-data")
      .then((response) => response.json())
      .then((data) => setDb_Data((data.allTasks)));
  }

  useEffect(() => {
    fetchData();
  }, fetchData)

  return (
    <>
       {
              db_Data && db_Data.length > 0 && db_Data.map((dataObj, index) => (
        <Link to={`/conferences-detail/${dataObj._id}`}>
          <div className='items shadowbox'  key={dataObj._id}>
            <div className='img'>
              <img src={dataObj.conferenceImage} alt='' />
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
              <h1>{dataObj.title}</h1>
              <p>{dataObj.subTitle.slice(0,29)}</p>
            </div>
          </div>
        </Link >
      ))}
    </>
  //   <>
  //   {blog.map((val) => (
  //     <Link to={`/conferences-detail/${val.id}`}>
  //       <div className='items shadowbox'>
  //         <div className='img'>
  //           <img src={val.cover} alt='' />
  //         </div>
  //         <div className='text'>
  //           <div className='admin flexSB'>
  //             <span>
  //               <i className='fa fa-map-marker'></i>
  //               <label htmlFor=''>{val.type}</label>
  //             </span>
  //             <span>
  //               <i className='fa fa-calendar-alt'></i>
  //               <label htmlFor=''>{val.date}</label>
  //             </span>
  //             <span>
  //               {/* <i className='fa fa-comments'></i> */}
  //               <i className='fa fa-calendar-alt'></i>
  //               <label htmlFor=''>{val.com}</label>
  //             </span>
  //           </div>
  //           <h1>{val.title.slice(0,35)}</h1>
  //           <p>{val.desc.slice(0,29)}...</p>
  //         </div>
  //       </div>
  //     </Link >
  //   ))}
  // </>
  )
}

export default BlogCard

// {blog.map((val) => (
//   <Link to={`/conferences-detail/${val.id}`}>
//     <div className='items shadowbox'>
//       <div className='img'>
//         <img src={val.cover} alt='' />
//       </div>
//       <div className='text'>
//         <div className='admin flexSB'>
//           <span>
//             <i className='fa fa-map-marker'></i>
//             <label htmlFor=''>{val.type}</label>
//           </span>
//           <span>
//             <i className='fa fa-calendar-alt'></i>
//             <label htmlFor=''>{val.date}</label>
//           </span>
//           <span>
//             {/* <i className='fa fa-comments'></i> */}
//             <i className='fa fa-calendar-alt'></i>
//             <label htmlFor=''>{val.com}</label>
//           </span>
//         </div>
//         <h1>{val.title.slice(0,35)}</h1>
//         <p>{val.desc.slice(0,29)}...</p>
//       </div>
//     </div>
//   </Link >
// ))}