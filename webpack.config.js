const path = require("path")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  // デプロイするときには "production" へ変更
  mode: "production",

  entry: path.resolve(__dirname, "./src/script/index.ts"),

  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "app.js",
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
        loader: "html-loader"
      }
    ],
  },

  plugins: [
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  devServer: {
    contentBase: path.resolve(__dirname, "./docs"),
    port: 3000,
  }
}
