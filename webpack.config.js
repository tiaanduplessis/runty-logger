const path = require('path')
const libraryName = 'runtyLogger'

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'browser'),
    filename: process.env.WEBPACK_ENV === 'production' ? `${libraryName}.min.js` : `${libraryName}.js`,
    library: libraryName,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
  devtool: 'cheap-module-source-map'
}
