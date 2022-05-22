import { Link } from 'gatsby';
import React from 'react';
import woaplogo from '../../assets/images/woap_logo.png';

const Footer = ({ ...rest }) => {
  return (
    <footer {...rest}>
      <div className="container pt-5 pb-5 d-flex align-items-center justify-content-between">
        <div className="brand">
          <img src={woaplogo} />
        </div>
        <div className="links">
          <Link className="text-white opacity-75 me-2" to="/resume/">
            Resume
          </Link>
          <Link className="text-white opacity-75 ms-2" to="/blogs/">
            Blogs
          </Link>
        </div>
      </div>
      <div className="container text-white opacity-75 text-center credit pb-4">
        <small>
          <small>
            Built with{' '}
            <a href="https://www.gatsbyjs.com/" rel="noopener noreferrer" target="_blank" className="text-white">
              Gatsby
            </a>{' '}
            and{' '}
            <a href="https://www.contentful.com/" rel="noopener noreferrer" target="_blank" className="text-white">
              Contentful
            </a>
            . Deployed by{' '}
            <a href="https://www.netlify.com/" rel="noopener noreferrer" target="_blank" className="text-white">
              Netlify
            </a>
          </small>
        </small>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
