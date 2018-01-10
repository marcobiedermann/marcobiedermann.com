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
                  thumbnail
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

      const posts = response.data.allMarkdownRemark.edges;

      return posts.forEach((post, index) => {
        const previous = index === posts.length - 1 ? false : posts[index + 1].node;
        const next = index === 0 ? false : posts[index - 1].node;

        createPage({
          path: post.node.frontmatter.path,
          component: postTemplate,
          context: {
            path: post.node.frontmatter.path,
            previous,
            next,
          },
        });
      });
    }));
  });
};
