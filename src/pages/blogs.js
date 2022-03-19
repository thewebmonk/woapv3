import * as React from 'react';
import NavBar from '../components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/app.scss';
import SEO from '../components/common/Seo';
import BlogCard from '../components/Blog/BlogCard';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';
import { humanizeTimeStamp } from '../utils';
import { BLOGS_URL, SITE_IMAGE } from '../constants';
import Breadcrumb from '../components/common/Broadcrumb/Breadcrumb';

// markup
const IndexPage = ({ data }) => {
  const breadcrumbs = [
    { name: 'Home', link: '/' },
    { name: 'Blogs', link: '/blogs/' }
  ];
  const blogs = data.allContentfulBlog.nodes;
  return (
    <>
      <div className="min-vh-100 ">
        <SEO
          title="Blogs | Ashish Patel: Full stack web developer | Headleass CMSs | React | JamStack | Express | Vue.js "
          description="I'm a passionate full stack web developer, a website is not just about technologies its more about business. So I just not build amazing website but a great business as well. My teck stack revolves around JavaScript including react, vue, nodejs, MERN and JAMstack."
          keywords="javascript, react, vuejs, developer, software engineer, nodejs, express, website, web developer, user interface, ui ux, blogs, articles, portfolio, jamshedpur, india"
          url={BLOGS_URL}
          image={SITE_IMAGE}
        />
        <NavBar />
        <div className="container mt-md-2 p-0">
          <Breadcrumb className="mt-3 d-block" breadcrumbs={breadcrumbs} />
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
