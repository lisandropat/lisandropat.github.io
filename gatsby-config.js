const config = require("./data/SiteConfig");

require('dotenv').config({
	path: `.env`
})

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    `gatsby-plugin-image`,
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
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: `/`, //config.siteUrl,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `src/images/clip.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: config.siteUrl,
      },
    },
  ],
}
