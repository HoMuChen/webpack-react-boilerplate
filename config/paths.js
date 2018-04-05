const resolve = require('path').resolve;

const appRootPath = resolve(__dirname, '../');
const resolvePath = relativePath => resolve(appRootPath, relativePath);

module.exports = {
  root: appRootPath,
  entry: resolvePath('src/client/index.js'),
  build: resolvePath('dist'),
  template: resolvePath('src/client/index.html'),
}
