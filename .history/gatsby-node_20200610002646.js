exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allDatoCmsArticle {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic('filed to create posts', result.error)
  }

  const posts = result\.allDatoCmsArticle.edges

  posts.forEach(post => {
    actions.createPage({
      path: post.node.id,
      component: require.resolve('./src/template/post.js'),
      context: {
        id: post.node.id,
      },
    });
  });
};





