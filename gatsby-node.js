// const path = require(`path`);
// // Log out information after a build is done
// exports.onPostBuild = ({ reporter }) => {
//   reporter.info(`Your Gatsby site has been built!`);
// };
// // Create blog pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const blogPostTemplate = path.resolve(
//     `./src/pages/blog/{ContentfulBlog.slug}.js`
//   );
//   const result = await graphql(`
//     query MyQuery {
//       allContentfulBlog {
//         nodes {
//           slug
//           id
//           createdAt
//           updatedAt
//           thumb {
//             file {
//               url
//             }
//           }
//           title
//         }
//       }
//     }
//   `);
//   result.data.allContentfulBlog.nodes.forEach((node) => {
//     createPage({
//       path: `${node.slug}`,
//       component: blogPostTemplate,
//       context: {
//         slug: node.slug
//       }
//     });
//   });
// };
