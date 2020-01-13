/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Devin Battle | Photography",
    author: "@lando2good",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "5mdc72psjua6",
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
