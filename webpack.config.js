const path = require("path")
const webpack = require("webpack")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",

  entry: path.resolve(__dirname, "./src/index.ts"),

  output: {
    path: path.resolve(__dirname),
    filename: "dist/app.js",
  },

  module: {
    rules: [
      {
        test: /\.ts(x)$/,
        loaders: ["babel-loader", "ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      }
    ],
  },

  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  devServer: {
    contentBase: path.resolve(__dirname),
    port: 3000,
  }
}
