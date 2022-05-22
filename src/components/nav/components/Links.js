import { Link } from 'gatsby';
import React from 'react';

const Links = () => {
  return (
    <>
      <Link to="/blogs/">Blogs</Link>
      <Link to="/resume/">Resume</Link>
      <Link to="/contact/">Contact</Link>
      <Link to="/projects/zoombox/">ZoomBox</Link>
    </>
  );
};
export default Links;
