import * as React from 'react';
import NavBar from '../components/nav';
import Landing from '../components/landing';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/app.scss';

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Helmet>
      <NavBar />
      <Landing />
    </>
  );
};

export default IndexPage;
