module.exports = {
  siteMetadata: {
    title: "oggiposso",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PMFWCM8",
        includeInDevelopment: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-remark`,
  ],
};
