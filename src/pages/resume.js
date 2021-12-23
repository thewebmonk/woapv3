import * as React from 'react';
import NavBar from '../components/nav';
import Footer from '../components/Footer';
import InDev from '../components/InDev';

const Portfolio = () => {
  return (
    <>
      <div className="min-vh-100 ">
        <NavBar />
        <InDev />
      </div>
      <Footer style={{ marginTop: '0' }} />
    </>
  );
};
export default Portfolio;
