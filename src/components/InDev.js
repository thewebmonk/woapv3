import { Link } from 'gatsby';
import React from 'react';

const InDev = ({ isContact = false }) => {
  return (
    <div className="d-flex h-100 mt-5 pt-5 flex-column justify-content-between align-content-center">
      <h3 className="text-white text-center">Page In Development</h3>
      <p className="text-center text-white-50">
        {isContact ? 'Connect me here' : 'Exciting content is on its way'}
      </p>
      {isContact ? (
        <a
          href="mailto:aspatel808@gmail.com"
          className="m-auto button primary "
        >
          aspatel808@gmail.com
        </a>
      ) : (
        <Link to="/blogs" className="m-auto button primary ">
          Continue With Blogs
        </Link>
      )}
    </div>
  );
};
export default InDev;
