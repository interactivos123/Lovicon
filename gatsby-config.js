module.exports = {
  siteMetadata: {
    title: 'Lovicon',
    description: 'Lovicon Page',
    author: 'ValentinoT SimonATC',
    siteUrl: 'https://loviconretail.co'
  },
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-material-ui',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://loviconretail.co'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://loviconretail.co',
        sitemap: 'https://loviconretail.co/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/',
          disallow: [
            '/no-abras-una-tienda-fisica-si-no-tienes-una-experiencia-de-marca-que-brindar/',
            '/clientes/',
            '/proyectos/',
            '/services/',
            '/products/',
            '/tiendas-virtuales/',
            '/en/our-clients/',
            '/productos/',
            '/proyectos/mac-bello-antioquia',
            '/proyectos/bbc',
            '/proyectos/kia',
            '/proyectos/mac-city-u',
            '/projects/',
            '/autorizacion-para-el-tratamiento-de-datos-personales/',
            '/en/projects/mac-bello-antioquia/',
            '/en/projects/mac-floresta/',
            '/en/projects/mac-city-u/',
            '/en/projects/bbc',
            '/en/projects/kia/'
          ]
        }]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo-favicon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-177618657-1'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
