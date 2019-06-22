const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'Drive Pricer',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'drive-pricer-prod',
        region: 'us-west-2',
        protocol: 'https',
        hostname: 'drivepricer.com',
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/components/carbar/scoot.svg',
      },
    },
    'gatsby-plugin-offline',
  ],
}
