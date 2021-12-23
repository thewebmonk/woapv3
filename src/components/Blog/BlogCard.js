import { Link } from 'gatsby';
import React from 'react';

const BlogCard = ({ title, date, link, image = '' }) => {
  return (
    <Link to={link}>
      <div className="blog-card">
        <div className="image">
          <img src={image} />
        </div>
        <div className="overlay"></div>
        <h5>{title}</h5>
        <span className="text-white-50 ">{date}</span>
      </div>
    </Link>
  );
};
export default BlogCard;
