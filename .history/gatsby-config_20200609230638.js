module.exports = {
  siteMetadata: {
    title: `SkowyrnyMG`,
    description: `Another boring programing blog.`,
    author: `@GruzlaMateusz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Skowyrny coding blog`,
        short_name: `Blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `7fe91b31aacd4fd544c2b4aa44c253`,
        preview: false,
        disableLiveReload: false,
      },
    },
  ],
}
