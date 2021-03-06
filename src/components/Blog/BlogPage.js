import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import getReadTime from 'easy-read-time';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import SEO from '../common/Seo';
import NavBar from '../nav';
import Ash from '../../assets/images/ash.jpg';
import Footer from '../Footer';
import { ctfAssetUrl, humanizeTimeStamp } from '../../utils';
import PrismCode from 'react-prism';
import 'prismjs';
import 'prismjs/components/prism-jsx.min';
import '../../assets/scss/blog.scss';
import '../../assets/css/prism.css';
import SuggestedBlogs from './SuggestedBlogs';
import { graphql } from 'gatsby';
import { BLOG_URL, PROJECT_URL } from '../../constants';
import Breadcrumb from '../common/Broadcrumb/Breadcrumb';

const BlogPage = ({ pageContext, data }) => {
  const blog = pageContext.data;
  const isProject = pageContext.isProject;
  const body = JSON.parse(blog.body.raw);
  const date = humanizeTimeStamp(blog.createdAtOld || blog.updatedAt);
  const getAssets = (id) => {
    const assets = blog?.body?.references;
    if (assets) {
      const asset = assets.filter((asset) => asset.contentful_id === id)[0];
      if (asset) {
        return asset;
      }
      return null;
    }
    return null;
  };
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = getAssets(node.data.target.sys.id);
        if (asset) {
          return <img src={asset.file.url} alt="Blog Embed Image" />;
        }
        return null;
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const asset = getAssets(node.data.target.sys.id);
        return (
          <pre>
            <PrismCode className={`language-${asset.language}`}>{asset.code.code}</PrismCode>
          </pre>
        );
      },
      [INLINES.HYPERLINK]: (node) => {
        const { data, content } = node;
        return (
          <a href={data.uri} target={'_blank'} rel="noreferrer">
            {content[0].value}
          </a>
        );
      }
    }
  };

  const readTime = getReadTime(documentToHtmlString(body, options));

  const breadcrumbs = [
    { name: 'Home', link: '/' },
    { name: 'Blogs', link: '/blogs/' }
  ];
  return (
    <>
      <SEO
        {...{
          ...blog.seo,
          image: ctfAssetUrl(blog.thumb.file.url),
          url: (isProject ? PROJECT_URL : BLOG_URL) + blog.slug + '/'
        }}
      />
      <NavBar />
      <div className="container p-0 container-blog">
        <div className="row  mt-2 position-relative  mt-md-5 m-0">
          <div className="col-lg-8 p-0">
            <div className="blog-header">
              <div className="blog-thumb">
                <img src={blog.thumb.file.url}></img>
              </div>
              <div className="overlay"></div>
              <div className="d-flex justify-content-between align-items-center">
                <Breadcrumb className="d-block" breadcrumbs={breadcrumbs} />
                <span className="text-white-50 fs-md-4">{date}</span>
              </div>
              <h1 className="text-white fw-bolder mt-3">{blog.title}</h1>
              <div className="meta mt-2 mt-md-3 pt-3 pt-md-4 d-flex justify-content-between align-items-center">
                <div className="author-details d-flex align-items-center">
                  <div className="avatar">
                    <img src={Ash} className="img-fluid" />
                  </div>
                  <span className="text-white-50 ms-3 ">By Ashish Patel</span>
                </div>
                <span className="text-white-50">{readTime.formattedString}</span>
              </div>
            </div>
            <article className="mt-2 mt-md-3 pt-3">{documentToReactComponents(body, options)}</article>
            <hr className="mt-4 mb-5" />
          </div>

          <div className="col-lg-4 p-0 ps-0 ps-md-5 text-white d-flex flex-column justify-content-between">
            <div></div>
            <div className="position-sticky  bottom-0 pb-3">
              <h5 className="mb-3">Recent Blogs</h5>
              {data.allContentfulBlog.nodes.map((blog, index) => (
                <SuggestedBlogs key={index} {...{ ...blog, className: 'suggested-blogs' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;

export const assetQuery = graphql`
  query GetSuggestedBlogs {
    allContentfulBlog(sort: { fields: createdAt, order: DESC }, limit: 3) {
      nodes {
        slug
        title
      }
    }
  }
`;
