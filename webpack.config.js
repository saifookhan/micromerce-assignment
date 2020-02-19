// webpack.config.js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const js = {
//   test: /\.js$/,
//   exclude: /node_modules/,
//   use: {
//     loader: "babel-loader"
//   }
// };
const pug = {
  test: /\.pug$/,
  use: ["html-loader?attrs=false", "pug-html-loader"]
};
const scss = {
  test: /\.sass$/,
  use: [
    MiniCssExtractPlugin.loader,
    // "style-loader", // style nodes from js strings
    "css-loader",
    "sass-loader"
  ]
};
const img = {
  test: /\.(png|svg|jp(e*)g|gif)$/,
  use: ["url-loader"]
};

const config = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [pug, scss, img]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.pug",
      inject: false
    }),
    new CopyPlugin([
      {
        from: path.resolve(__dirname, "src/assets/img"),
        to: path.resolve(__dirname, "dist/assets/img")
      }
    ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
module.exports = config;
