const webpack = require('webpack')
const path = require('path')
const Dotenv = require('dotenv-webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const jsConfig = require('./jsconfig.json')

const { paths } = jsConfig.compilerOptions

const aliases = Object.keys(paths).reduce((prev, key) => {
  prev[key] = path.resolve(__dirname, `./${paths[key][0]}`)
  return prev
}, {})


const config = {
  entry: [
    './src/app.jsx',
  ],
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: './src/template/index.html',
      title: 'React Boilerplate',
      favicon: './src/images/reactjsicon.png',
    }),
    new CleanWebpackPlugin(['public']),
  ],
  resolve: {
    modules: [
      'node_modules',
      './src',
    ],
    alias: aliases,
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', 'env', 'stage-2'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
            outputPath: 'images/',
          },
        }, {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
          },
        }],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/](node_modules|common|src\/schema)[\\/]/,
          name: 'dependencies',
          chunks: 'all',
        },
      },
    },
  },
}

module.exports = config
