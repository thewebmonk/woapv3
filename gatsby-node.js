const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/components/Blog/BlogPage.js`);
  let result = await graphql(`
    query BlogQuery {
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
          createdAtOld
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

  result = await graphql(`
    query ProjectQuery {
      allContentfulProject {
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
          createdAtOld
        }
      }
    }
  `);
  result.data.allContentfulProject.nodes.forEach((node) => {
    createPage({
      path: `/project/${node.slug}`,
      component: blogPostTemplate,
      context: {
        data: node
      }
    });
  });
};
