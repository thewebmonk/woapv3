import * as React from 'react';
import NavBar from '../components/nav';
import Footer from '../components/Footer';
import InDev from '../components/InDev';
import SEO from '../components/common/Seo';
import { CONTACT_URL, SITE_IMAGE } from '../constants';

const Portfolio = () => {
  return (
    <>
      <div className="min-vh-100 ">
        <SEO
          title="Contact | Ashish Patel"
          description="A space enthusiast software engineer, building amazing user interfaces, websites, web apps and APIs primarily using react, JamStack and express as key technologies."
          url={CONTACT_URL}
          image={SITE_IMAGE}
        />
        <NavBar />
        <InDev isContact={true} />
      </div>
      <Footer style={{ marginTop: '0' }} />
    </>
  );
};
export default Portfolio;
