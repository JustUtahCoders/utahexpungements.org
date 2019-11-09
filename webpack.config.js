const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin").CleanWebpackPlugin;

module.exports = {
  entry: path.resolve(__dirname, "frontend/utah-expungements.js"),
  output: {
    filename: "utah-expungements.js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].js"
  },
  mode: "production",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    port: 9000
  },
  resolve: {
    modules: [__dirname, "node_modules"],
    alias: {
      moment: path.resolve(__dirname, "node_modules/moment/min/moment.min.js"),
      lodash: "lodash-es"
    }
  },
  plugins: [new CleanWebpackPlugin()]
};
