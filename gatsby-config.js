module.exports = {
  siteMetadata: {
    title: `Chuseok Event 2019`,
    author: `Eunjae Lee`,
    description: `Let's eat some Korean food 🎉`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-147658990-1',
      },
    },
    {
      resolve: 'gatsby-plugin-emoji-favicon',
      options: {
        emoji: '🤤',
      },
    },
    `gatsby-theme-mdx-blog`,
    { resolve: `gatsby-theme-mdx-tailwind-blog`, options: { purgecss: null } },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
