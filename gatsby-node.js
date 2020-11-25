/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}

exports.createPages = async({graphql, actions}) => {

  const { createPage } = actions;

  const result = await graphql(`
  {
    allDatoCmsCategory {
      edges {
        node {
          slug
        }
      }
    }
  }`)

  const categories = result.data.allDatoCmsCategory.edges;

  categories.forEach(({node}) => {
    const { slug } = node;

    createPage({
      path: `/treatments/${slug}`,
      component: require.resolve(`./src/templates/category.js`),
      context: {
        slug
      }
    })
  })
}