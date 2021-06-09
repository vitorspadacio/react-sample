const webpack = require('webpack')
const { merge } = require('webpack-merge')

const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  const { PLATFORM, VERSION } = env;

  return merge([
    {
      stats: 'errors-only',
      resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          modules: __dirname + '/node-modules'
        }
      },
      devtool: PLATFORM === 'production' ? false : 'source-map',
      module: {
        rules: [
          {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: { cacheDirectory: true, compact: false }
              },
              {
                loader: 'eslint-loader',
                options: { fix: true }
              }
            ]
          },
          {
            test: /\.ts[x]?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'ts-loader'
              },
            ]
          },
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false
            }
          },
          {
            test: /\.scss$/,
            use: [
              PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'images/'
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html'
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(VERSION),
          'process.env.PLATFORM': JSON.stringify(PLATFORM)
        }),
        new ESLintPlugin({ fix: true }),
      ]
    }
  ]);
}

