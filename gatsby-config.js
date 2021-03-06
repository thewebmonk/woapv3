require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
module.exports = {
  siteMetadata: {
    siteUrl: 'https://worldsofashishpatel.com/',
    title: 'Worlds of Ashish Patel'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}'
          ]
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true
          }
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CTF_SPACE_ID,
        include: 10,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CTF_CDA_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['UA-142575352-1', 'G-00XPM1VYNE'],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        pluginConfig: {
          head: true
        }
      }
    }
  ]
};
