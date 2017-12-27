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

exports.modifyWebpackConfig = ({ config, stage }, options) => {
  config.loader('url-loader', {
    test: /\.(jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      name: 'static/[name].[hash:8].[ext]',
    },
  });

  switch (stage) {
    case 'develop': {
      config.loader('svg-sprite', {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      });

      return config;
    }

    case 'build': {
      config.loader('svg-sprite', {
        loader: 'svg-sprite-loader',
        test: /\.svg$/,
        // query: {
        //   extract: true,
        // },
      });

      // config.plugin('svg-sprite', () => new SpriteLoaderPlugin());

      return config;
    }

    default: {
      return config;
    }
  }
};
