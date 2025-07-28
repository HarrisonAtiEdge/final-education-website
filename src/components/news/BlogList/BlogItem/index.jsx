import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../Chip/index';
import './styles.css';

const BlogItem = ({
  blog: {
    category,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
       <Link className='blogItem-link' to={`/blog/${id}`}>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc'>{description}</p>
      </Link>
      <footer>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
