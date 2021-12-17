import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import SEO from '../common/Seo';
import NavBar from '../nav';
import Ash from '../../assets/images/ash.jpg';
import Footer from '../Footer';
import { ctfAssetUrl, humanizeTimeStamp } from '../../utils';
import PrismCode from 'react-prism';
import 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/themes/prism-tomorrow.css';
import '../../assets/scss/blog.scss';
import SuggestedBlogs from './SuggestedBlogs';
import { graphql } from 'gatsby';

const BlogPage = ({ pageContext, data }) => {
  console.log(pageContext.data);
  const blog = pageContext.data;
  const body = JSON.parse(blog.body.raw);
  const date = humanizeTimeStamp(blog.updatedAt);
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
        console.log(asset);
        if (asset) {
          return <img src={asset.file.url} alt="Blog Embed Image" />;
        }
        return null;
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const asset = getAssets(node.data.target.sys.id);
        return (
          <pre>
            <PrismCode className="language-js">{asset.code.code}</PrismCode>
          </pre>
        );
      }
    }
  };
  return (
    <>
      <SEO
        {...{
          ...blog.seo,
          article: true,
          image: ctfAssetUrl(blog.thumb.file.url)
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
            </div>
            <article className="mt-4 pt-3">
              {documentToReactComponents(body, options)}
            </article>
            <hr className="mt-4 mb-5" />
          </div>

          <div className="col-lg-4 p-0 ps-0 ps-md-5 text-white d-flex flex-column justify-content-between">
            <div>
              <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1670731865476965"
                crossOrigin="anonymous"
              ></script>

              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-1670731865476965"
                data-ad-slot="9020466163"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
            </div>
            <div className="position-sticky  bottom-0 pb-3">
              <h5 className="mb-3">Recent Blogs</h5>
              {data.allContentfulBlog.nodes.map((blog) => (
                <SuggestedBlogs
                  {...{ ...blog, className: 'suggested-blogs' }}
                />
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
    allContentfulBlog {
      nodes {
        slug
        updatedAt
        title
      }
    }
  }
`;
