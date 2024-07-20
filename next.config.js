// @ts-check
const { withBlitz } = require("@blitzjs/next");
// next.config.js blitz:{ resolverPath: "root", },

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  pageExtensions: ["page.tsx", "page.ts", "page.js", "page.jsx"],
};

module.exports = withBlitz(config);
