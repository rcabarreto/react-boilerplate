const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].development.js',
    path: path.join(__dirname, 'public'),
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.16.0.205:9000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false,
      },
    },
    contentBase: path.join(__dirname, 'public'),
    port: 1234,
    historyApiFallback: true,
  },
})
