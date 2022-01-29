import * as React from 'react';
import NavBar from '../components/nav';
import Landing from '../components/landing';
import SEO from '../components/common/Seo';
import BlogCard from '../components/Blog/BlogCard';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';
import { humanizeTimeStamp } from '../utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/app.scss';
import { SITE_IMAGE, SITE_URL } from '../constants';

// markup
const IndexPage = ({ data }) => {
  const blogs = data.allContentfulBlog.nodes;
  return (
    <>
      <div className="min-vh-100 ">
        <SEO
          title="Ashish Patel: Full stack web developer | Headleass CMSs | React | JamStack | Express | Vue.js "
          description="I'm a passionate full stack web developer, a website is not just about technologies its more about business. So I just not build amazing website but a great business as well. My teck stack revolves around JavaScript including react, vue, nodejs, MERN and JAMstack."
          keywords="javascript, react, vuejs, developer, software engineer, nodejs, express, website, web developer, user interface, ui ux, blogs, articles, portfolio, jamshedpur, india"
          url={SITE_URL}
          image={SITE_IMAGE}
        />
        <NavBar />
        <Landing />
        <div className="container mt-4 mt-md-5 pt-0 pt-md-5">
          <h4 className="text-center mt-0 mt-md-5 fs-6 text-white-50">Continue with blogs</h4>
          <div className="row m-0 p-0 mt-2  mb-4">
            {blogs.map((blog) => (
              <div className="col-md-4 mt-3">
                <BlogCard
                  title={blog.title}
                  link={`/blog/${blog.slug}/`}
                  date={humanizeTimeStamp(blog.createdAtOld || blog.createdAt)}
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
  query GetThreeBlogs {
    allContentfulBlog(sort: { fields: updatedAt, order: DESC }, limit: 3) {
      nodes {
        slug
        updatedAt
        title
        thumb {
          file {
            url
          }
        }
        createdAtOld
        createdAt
      }
    }
  }
`;
