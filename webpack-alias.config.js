const path = require('path');
const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  resolve: {
    alias: {
      '@api': resolvePath('src/api'),
      '@components': resolvePath('src/components'),
      '@constants': resolvePath('src/constants'),
      '@icons': resolvePath('src/icons'),
      '@styles': resolvePath('src/styles'),
    },
  },
};
