const customBreakpointQueries = {
  sm: '(max-width: 767px)',
  md: '(max-width: 1023px)',
  l: '(max-width: 1440px)',
  portrait: '(orientation: portrait)',
};

module.exports = {
  siteMetadata: {
    title: 'Southwest Construction Parts',
    description: 'High quality construction equipment replacement parts for Barber - Greene, Blaw Knox, Broce, Case, Cat, Deere, Komatsu, Volvo, and many others. Authorized dealers for Black Cat Wear Parts, Bucyrus Blades, ESCO, H-E Parts, ITR/Metaris, Kennametal, Pengo and other quality manufacturers.',
    author: '@SouthwestConstructionParts',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'swcp',
        short_name: 'swcp',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/assets/favicon-16x16.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: customBreakpointQueries,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/'
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Roboto Condensed\:300,400,700',
          'Roboto\:300,400,700',
          'Roboto Slab\:300,400,700'
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
}
