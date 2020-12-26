module.exports = {
  siteMetadata: {
    title: "Oggi posso",
    titleTemplate: "Oggi posso",
    description: "Le regole COVID-19 per regione.",
    url: "https://www.oggiposso.it", // No trailing slash allowed!
    image: "/images/clover.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "",
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
    `gatsby-transformer-remark`,
  ],
};
