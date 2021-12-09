import React from 'react';
import { graphql, Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import moment from 'moment';
import SEO from '../../components/common/Seo';
import NavBar from '../../components/nav';
import '../../assets/scss/blog.scss';
import Ash from '../../assets/images/ash.jpg';
import Footer from '../../components/Footer';

const Blog = ({ data }) => {
  const blog = data.allContentfulBlog.nodes[0];
  const body = JSON.parse(blog.body.raw);
  const date = moment(blog.updatedAt).format('D MMM, YYYY');
  console.log(blog);
  return (
    <>
      <SEO title={blog.title} />
      <NavBar />
      <div className="container">
        <div className="row  mt-2 mt-md-5 m-0">
          <div className="col-lg-12 p-0">
            <span className="text-white-50 fs-md-4">{date}</span>
            <h1 className="text-white fw-bolder mt-3">{blog.title}</h1>
            <div className="meta mt-4 pt-3 pt-md-4 d-flex justify-content-between align-items-center">
              <div className="author-details d-flex align-items-center">
                <div className="avatar">
                  <img src={Ash} className="img-fluid" />
                </div>
                <span className="text-white-50 ms-3 ">By Ashish Patel</span>
              </div>
              <span className="text-white-50">10 Min Read</span>
            </div>
            <article className="mt-4 pt-3">
              {documentToReactComponents(body)}
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;

export const assetQuery = graphql`
  query MyQuery($slug: String) {
    allContentfulBlog(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        id
        body {
          raw
        }
        createdAt
        updatedAt
        thumb {
          file {
            url
          }
        }
        title
      }
    }
  }
`;
