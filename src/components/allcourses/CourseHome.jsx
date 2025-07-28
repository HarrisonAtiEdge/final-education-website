import React from "react"
import Back2 from "../common/back/Back2"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"

const CourseHome = () => {
  return (
    <>
      <Back2 title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome
