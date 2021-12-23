import * as React from 'react';
import NavBar from '../components/nav';
import Footer from '../components/Footer';
import { Link } from 'gatsby';

// markup
const NotFoundPage = () => {
  return (
    <>
      <div className="min-vh-100 ">
        <NavBar />
        <div className="d-flex h-100 mt-5 pt-5 flex-column justify-content-between align-content-center">
          <h3 className="text-white text-center">404: Page Not Found</h3>
          <p className="text-center text-white-50">
            Sorry, the page you're trying to access does not exist.
          </p>
          <Link to="/" className="m-auto button primary ">
            Continue
          </Link>
        </div>
      </div>
      <Footer style={{ marginTop: '0' }} />
    </>
  );
};

export default NotFoundPage;
