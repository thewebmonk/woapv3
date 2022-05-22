import React from 'react';
import { Link } from 'gatsby';
import './breadcrumb.scss';

const Breadcrumb = ({ breadcrumbs = [], className = '' }) => {
  return (
    <div className={`pages-breadcrumb ${className}`}>
      {breadcrumbs.map((bread, index) => {
        return (
          <Link key={index} to={bread?.link ? bread?.link : '#'}>
            {bread?.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
