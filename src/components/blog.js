import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import SEO from './common/Seo';
import NavBar from './nav';
import Ash from '../assets/images/ash.jpg';
import Footer from './Footer';
import { humanizeTimeStamp } from '../utils';
import PrismCode from 'react-prism';
import 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/themes/prism-tomorrow.css';
import '../assets/scss/blog.scss';

const Blog = ({ pageContext }) => {
  const blog = pageContext.data;
  // console.log(blog.body.raw);
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
      <SEO title={blog.title} />
      <NavBar />
      <div className="container container-blog">
        <div className="row  mt-2 mt-md-5 m-0">
          <div className="col-lg-9 p-0">
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
              {documentToReactComponents(body, options)}
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;

// export const assetQuery = graphql`
//   query MyQuery($slug: String) {
//     allContentfulBlog(filter: { slug: { eq: $slug } }) {
//       nodes {
//         slug
//         id
//         body {
//           raw
//           references {
//             ... on ContentfulAsset {
//               contentful_id
//               __typename
//               file {
//                 url
//               }
//             }
//           }
//         }
//         createdAt
//         updatedAt
//         thumb {
//           file {
//             url
//           }
//         }
//         title
//       }
//     }
//   }
// `;
