/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  /**
   * https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
   * Customize webpack configuration to replace offending module with a dummy module during server rendering.
   */
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-tiny-link/, // needs window loaded on the client
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
