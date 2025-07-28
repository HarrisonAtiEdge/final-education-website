import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList } from '../../../dummydata';
import EmptyList from '../EmptyList/index';
import './styles.css';
import { Link } from 'react-router-dom';
import Back10 from "../../common/back/Back10"
const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
    {blog && (
      <div>
    <Back10 title={blog.title} />
      
      
        <div className='blog-wrap'>
          
         <div className='blogimgalign'>
          <img src={blog.cover} alt='cover' />
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
           
          </header>
          <p className='blogsubtitle'>{blog.subtitle}</p>
          <p className='blog-desc' dangerouslySetInnerHTML={{__html: blog.description}}></p>
          <p className='blog-desc' dangerouslySetInnerHTML={{__html: blog.descriptions01}}></p>
          <p className='blog-desc' dangerouslySetInnerHTML={{__html: blog.descriptions02}}></p>
          <p className='blog-desc' dangerouslySetInnerHTML={{__html: blog.descriptions03}}></p>
          {/* <p className='blog-desc'>{blog.description}</p> */}
          <h3>{blog.heading1}</h3>
          <p className='blog-desc' dangerouslySetInnerHTML={{__html: blog.description1}}></p>
          {/* <p className='blog-desc'>{blog.description1}</p> */}
          <h3>{blog.heading2}</h3>
          
          <p className='blog-desc' dangerouslySetInnerHTML={{__html: blog.description2}}></p>
          
          <h3>{blog.heading3}</h3>
          <p className='blog-desc' dangerouslySetInnerHTML={{__html: blog.description3}}></p>
          {/* <p className='blog-desc'>{blog.description3}</p> */}
          <h3>{blog.heading4}</h3>
          <p className='blog-desc' dangerouslySetInnerHTML={{__html: blog.description4}}></p>
          {/* <p className='blog-desc'>{blog.description4}</p> */}
          <h3>{blog.heading5}</h3>
          <p className='blog-desc' dangerouslySetInnerHTML={{__html: blog.description5}}></p>
          {/* <p className='blog-desc'>{blog.description4}</p> */}
          </div>
          <Link className='blog-goBack' to='/new'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
        </div>
       
      
        </div>
      )}  
    </>
  );
}

export default Blog;
