import * as React from 'react';
import NavBar from '../components/nav';
import Landing from '../components/landing';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/app.scss';
import SEO from '../components/common/Seo';

// markup
const IndexPage = () => {
  return (
    <>
      <SEO title="Ashish Patel : Web Development in Jamshedpur, India working as a freelacer. " />
      <NavBar />
      <Landing />
    </>
  );
};

export default IndexPage;
