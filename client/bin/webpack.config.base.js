const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'src/index.html'),
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.join(process.cwd(), 'node_modules'),
        include: path.join(process.cwd(), 'src/'),
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              extends: path.join(process.cwd(), '/.babelrc')
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { importLoaders: 1, modules: true }
          },
          { loader: 'postcss-loader' }
        ]
      }
      // {
      //   test: /\.png$|\.jpg$|.jpeg|\.svg$/,
      //   loaders: [{ loader: 'file-loader', options: { name: '[hash].[ext]' } }]
      // }
    ]
  },
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: 'application.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      Features: path.join(process.cwd(), 'src', 'features'),
      Utils: path.join(process.cwd(), 'src', 'utils')
    }
  },
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    stats: {
      colors: true
    },
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};
