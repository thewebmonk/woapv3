import * as React from 'react';
import NavBar from '../components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/app.scss';
import SEO from '../components/common/Seo';
import BlogCard from '../components/Blog/BlogCard';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';
import { humanizeTimeStamp } from '../utils';
import { BLOGS_URL } from '../constants';

// markup
const IndexPage = ({ data }) => {
  const blogs = data.allContentfulBlog.nodes;
  return (
    <>
      <div className="min-vh-100 ">
        <SEO
          title="Blogs | Ashish Patel: Full stack web developer | Headleass CMSs | React | JamStack | Express | Vue.js "
          description="I'm a passionate full stack web developer, a website is not just about technologies its more about business. So I just not build amazing website but a great business as well. My teck stack revolves around JavaScript including react, vue, nodejs, MERN and JAMstack."
          keywords="javascript, react, vuejs, developer, software engineer, nodejs, express, website, web developer, user interface, ui ux, blogs, articles, portfolio, jamshedpur, india"
          url={BLOGS_URL}
          image=""
        />
        <NavBar />
        <div className="container mt-md-2 pt-0 pt-md-5">
          <h1 className="text-white display-1 fw-bolder text-center mb-4">Blogs</h1>
          <h4 className="text-center mt-0 mt-md-5 fs-6 text-white-50">Recent Blogs</h4>
          <div className="row m-0 p-0 mt-2  mb-4">
            {blogs.map((blog) => (
              <div className="col-md-4 mt-3 p-0 p-md-2">
                <BlogCard
                  title={blog.title}
                  link={`/blog/${blog.slug}/`}
                  date={humanizeTimeStamp(blog.createdAt)}
                  image={blog.thumb.file.url}
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
        thumb {
          file {
            url
          }
        }
      }
    }
  }
`;
