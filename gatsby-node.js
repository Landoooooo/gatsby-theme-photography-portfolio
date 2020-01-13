const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const photoTemplate = path.resolve("./src/templates/photo.js")
  const res = await graphql(`
    query {
      allContentfulPhoto {
        totalCount
        edges {
          node {
            urlName
          }
        }
      }
    }
  `)

  const total = res.data.allContentfulPhoto.totalCount
  const photos = res.data.allContentfulPhoto
  res.data.allContentfulPhoto.edges.forEach((edge, i) => {
    createPage({
      component: photoTemplate,
      path: `/gallery/${edge.node.urlName}`,
      context: {
        slug: edge.node.urlName,
        position: i + 1,
        total: total,
        prev: i === 0 ? null : photos.edges[i - 1].node.urlName,
        next:
          i === photos.edges.length - 1
            ? null
            : photos.edges[i + 1].node.urlName,
      },
    })
  })
}
