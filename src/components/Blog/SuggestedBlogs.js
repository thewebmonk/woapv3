import { Link } from 'gatsby';
import React from 'react';
import { humanizeTimeStamp } from '../../utils';

const SuggestedBlogs = ({ title, slug, updatesAt, ...rest }) => {
  console.log(title);
  return (
    <div {...rest}>
      <Link to={`/blog/${slug}`}>
        <p className="text-white-50 mb-3 pb-1">{title}</p>
      </Link>
    </div>
  );
};
export default SuggestedBlogs;
