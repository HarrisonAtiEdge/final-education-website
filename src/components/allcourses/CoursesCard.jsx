import { useEffect, useState } from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import { Link } from "react-router-dom";

const CoursesCard = () => {
  const [db_Data, setDb_Data] = useState([]);
  const [items, setItems] = useState([]);

  const fetchData = () => {
    fetch("https://edu-db-15-may-24-git-main-fahad-khataks-projects.vercel.app/read-course")
      .then((response) => response.json())
      .then((data) => {
        setDb_Data(data.allTasks);
        setItems(data.allTasks); 
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterItem = (focusItem) => {
    if (focusItem === "All Courses") {
      setItems(db_Data);
    } else {
      const filteredFocusItem = db_Data.filter(
        (currentElement) => currentElement.Focus === focusItem
      );
      setItems(filteredFocusItem);
    }
  };

  const allFocusValues = [
    "All Courses",
    ...new Set(db_Data.map((currentValue) => currentValue.Focus)),
  ];

  const [focusItems, setFocusItems] = useState(allFocusValues);

 

  return (
    <>
      <section className="coursesCard">
        <div className=" grid3">
          {focusItems.map((dataObj, index) => (
            <button
              className="outline-btn"
              key={index}
              onClick={() => filterItem(dataObj)}
            >
              {dataObj}
            </button>
          ))}
        </div>
        <br />
        <br />
        <div className='container101 grid2'>
          {
            items.map((dataObj) => (
              <div className='items' key={dataObj._id}>
                <div className='content flex'>
                  <div className='left'>
                    <div className='img'>
                      <img src={dataObj.courseCategoryLogo} alt='iedge-education-cousrse-destails' />
                    </div>
                  </div>
                  <div className='text'>
                    <h2>{dataObj.title.slice(0, 26)}...</h2>
                    <div className='details'>
                    
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={dataObj.courseByLogo} alt='iedge-education-cousrse-destails' />
                          </div>
                          <div className='para'>
                            <h4>{dataObj.courseBy}</h4>
                          </div>
                        </div>
                      </>
                  
                    </div>
                  </div>
                </div>
                <div className='price'>
                  <h3>
                    {dataObj.price.slice(0, 50)}
                  </h3>
                </div>
                <Link to={`/courses-detail/${dataObj._id}`}>
                  <button className='outline-btn'>COURSE DETAILS </button>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </>
   
  
  );
};

export default CoursesCard;
