import { Link } from 'gatsby';
import React from 'react';

const BlogCard = ({ title, date, link }) => {
  return (
    <Link to={link}>
      <div className="blog-card">
        <h5>{title}</h5>
        <span className="text-white-50 ">{date}</span>
      </div>
    </Link>
  );
};
export default BlogCard;
