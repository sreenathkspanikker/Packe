/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-svgr-svgo`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ["QUUB"],
          urls: ["/assets/scss/fonts/font.scss"],
        }
      }
    }
  ]
}
