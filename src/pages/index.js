import * as React from 'react';
import NavBar from '../components/nav';
import Landing from '../components/landing';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/app.scss';
import SEO from '../components/common/Seo';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer';

// markup
const IndexPage = () => {
  return (
    <>
      <div className="min-vh-100 ">
        <SEO title="Ashish Patel : Web Development in Jamshedpur, India working as a freelacer. " />
        <NavBar />
        <Landing />
        <div className="container mt-5 pt-0 pt-md-3">
          <h4 className="text-center mt-5 pt-5 fs-6 text-white-50">
            Recent Blogs
          </h4>
          <div className="row m-0 p-0 mt-2  mb-4">
            <div className="col-md-4 mt-3">
              <BlogCard
                title={
                  'Want to learn PHP ? Best resources to learn PHP programming language.'
                }
                link="/blog/want-to-learn-php-best-resources-to-learn-php-programming-language"
                date="8 Dec, 2021"
              />
            </div>
            <div className="col-md-4 mt-3">
              <BlogCard
                title={'My programming journey from LOGO to LARAVEL.'}
                link="/blog/my-programming-journey-from-logo-to-laravel"
                date="8 Dec, 2021"
              />
            </div>
            <div className="col-md-4 mt-3">
              <BlogCard
                title={
                  'Want to learn PHP ? Best resources to learn PHP programming language.'
                }
                link="/blog/want-to-learn-php-best-resources-to-learn-php-programming-language"
                date="8 Dec, 2021"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
