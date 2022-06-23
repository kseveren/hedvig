const aliasConfig = require('./webpack-alias.config');

module.exports = {
  webpack: {
    alias: { ...aliasConfig.resolve.alias },
  },
};
