import { Link } from 'gatsby';
import React from 'react';
import { humanizeTimeStamp } from '../../utils';

const SuggestedBlogs = ({ title, slug, className }) => {
  return (
    <div className={className}>
      <Link to={`/blog/${slug}`}>
        <p className="text-white-50 mb-3 pb-1">{title}</p>
      </Link>
    </div>
  );
};
export default SuggestedBlogs;
