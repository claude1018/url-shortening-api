const prod = process.env.NODE_ENV === 'production';
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const removeNull = (array) => array.filter((plugin) => plugin !== null);

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    filename: `app/js/[name]${prod ? '.[contenthash].' : '.'}bundle.js`,
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'app/images/[name]-[hash][ext][query]'
  },
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json']
        },
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(svg|png|jpe?g)$/,
        type: 'asset/resource'
      }
    ]
  },
  devtool: prod ? undefined : 'source-map',
  plugins: removeNull([
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/images/icons8-link-32.png'
    }),
    new MiniCssExtractPlugin({ filename: `app/css/[name]${!prod ? '.[hash].' : '.'}css` }),
    prod ? new CleanWebpackPlugin() : null
  ])
};
