import React from 'react';
import woaplogo from '../../assets/images/woap_logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="container pt-5 pb-5 d-flex justify-content-center">
        <div className="brand">
          <img src={woaplogo} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
