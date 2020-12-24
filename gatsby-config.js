module.exports = {
  siteMetadata: {
    title: "oggiposso",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-remark`
  ],
  // @todo: likely reset to / when moving to oggiposso.it
  pathPrefix: "/",
};
