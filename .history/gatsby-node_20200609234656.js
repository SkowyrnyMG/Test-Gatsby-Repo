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

  const posts = result.data.allDatoCmsArticle.edges

  posts.forEach(post => {
    actions.createPage({
      path: post.node.id,
      // component: ??
      context: {
        id: post.node.id,
      },
    })
  })
}
