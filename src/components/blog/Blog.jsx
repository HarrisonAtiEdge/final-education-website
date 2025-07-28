import React from "react"
import BlogCard from "./BlogCard"
import "./blog.css"
import { Conferences } from "../../dummydata"
import Heading from "../common/heading/Heading"
import Back1 from "../common/back/Back1"

const Blog = () => {
  return (
    <>
      <Back1 title='Conferences' />
      <section className='blog padding'>
        <div>
          <Heading title='Join Us in Shaping the Future' />
          <div>
            {Conferences.map((val) => {
              return (
                <div>
                  <div className='Paragraph'>
                    <p>{val.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='container101 grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default Blog
