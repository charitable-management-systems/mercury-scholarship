import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  // Served from https://charitable-management-systems.github.io/mercury-scholarship/
  // When moving to a custom domain: remove pathPrefix, add static/CNAME and
  // drop --prefix-paths from the deploy script.
  pathPrefix: "/mercury-scholarship",
  siteMetadata: {
    title: `Mercury University Scholarship Program`,
    siteUrl: `https://charitable-management-systems.github.io`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;
