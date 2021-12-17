import * as React from 'react';
import NavBar from '../components/nav';
import Landing from '../components/landing';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/app.scss';
import SEO from '../components/common/Seo';
import BlogCard from '../components/Blog/BlogCard';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';
import { humanizeTimeStamp } from '../utils';

// markup
const IndexPage = ({ data }) => {
  const blogs = data.allContentfulBlog.nodes;
  return (
    <>
      <div className="min-vh-100 ">
        <SEO title="Ashish Patel : Web Development in Jamshedpur, India working as a freelacer. " />
        <NavBar />
        <div className="container mt-4 mt-md-5 pt-0 pt-md-5">
          <h4 className="text-center mt-0 mt-md-5 fs-6 text-white-50">
            Recent Blogs
          </h4>
          <div className="row m-0 p-0 mt-2  mb-4">
            {blogs.map((blog) => (
              <div className="col-md-4 mt-3">
                <BlogCard
                  title={blog.title}
                  link={`/blog/${blog.slug}/`}
                  date={humanizeTimeStamp(blog.createdAt)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;

export const assetQuery = graphql`
  query GetAllBlogs {
    allContentfulBlog {
      nodes {
        slug
        title
        updatedAt
        createdAt
      }
    }
  }
`;
