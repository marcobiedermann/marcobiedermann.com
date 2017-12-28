const path = require('path');
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const postTemplate = path.resolve('src/templates/post.jsx');

  return new Promise((resolve, reject) => {
    resolve(graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                html
                id
                frontmatter {
                  agency
                  client
                  color
                  colors
                  desktop
                  fonts
                  homepage
                  mobile
                  path
                  role
                  tablet
                  title
                  website
                }
              }
            }
          }
        }
      `).then((response) => {
      if (response.errors) {
        return reject(response.errors);
      }

      return response.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
        });
      });
    }));
  });
};
