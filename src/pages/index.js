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
      <div className="min-vh-100 d-fl">
        <SEO title="Ashish Patel : Web Development in Jamshedpur, India working as a freelacer. " />
        <NavBar />
        <Landing />
        <div className="container mt-5 pt-3">
          <h4 className="text-center mt-5 pt-5 fs-6 text-white-50">
            Read Blogs
          </h4>
          <div className="row m-0 p-0 mt-3  mb-4">
            <div className="col-md-4 mt-3">
              <BlogCard />
            </div>
            <div className="col-md-4 mt-3">
              <BlogCard />
            </div>
            <div className="col-md-4 mt-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
