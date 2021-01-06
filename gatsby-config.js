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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                "heading[depth=1]": "title",
                "heading[depth=2]": "subtitle",
                paragraph: "para",
              }
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Oggi posso`,
        short_name: `Oggi posso`,
        start_url: `/`,
        background_color: `#228B22`,
        theme_color: `#228B22`,
        display: `browser`,
        icon: `static/images/clover.png`,
        include_favicon: false, // This will exclude favicon link tag
      },
    },
    `gatsby-plugin-postcss`,
  ],
};
