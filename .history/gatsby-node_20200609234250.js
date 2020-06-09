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
}
