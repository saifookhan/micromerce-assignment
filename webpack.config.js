// webpack.config.js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pug = {
  test: /\.pug$/,
  use: ["html-loader?attrs=false", "pug-html-loader"]
};
const scss = {
  test: /\.(scss)$/,
  use: [
    {
      // Adds CSS to the DOM by injecting a `<style>` tag
      loader: "style-loader"
    },
    {
      // Interprets `@import` and `url()` like `import/require()` and will resolve them
      loader: "css-loader"
    },
    {
      // Loader for webpack to process CSS with PostCSS
      loader: "postcss-loader",
      options: {
        plugins: function() {
          return [require("autoprefixer")];
        }
      }
    },
    {
      // Loads a SASS/SCSS file and compiles it to CSS
      loader: "sass-loader"
    }
  ]
};

const config = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [pug, scss]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.pug",
      inject: false
    })
  ]
};
module.exports = config;
