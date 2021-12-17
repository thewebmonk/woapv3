const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/components/Blog/BlogPage.js`);
  const result = await graphql(`
    query MyQuery {
      allContentfulBlog {
        nodes {
          slug
          id
          body {
            raw
            references {
              ... on ContentfulAsset {
                contentful_id
                __typename
                file {
                  url
                }
              }
              ... on ContentfulCodeBlock {
                contentful_id
                __typename
                language
                code {
                  code
                }
              }
            }
          }
          createdAt
          updatedAt
          thumb {
            file {
              url
            }
          }
          title
          seo {
            description
            title
            keywords
          }
        }
      }
    }
  `);
  result.data.allContentfulBlog.nodes.forEach((node) => {
    createPage({
      path: `/blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        data: node
      }
    });
  });
};
