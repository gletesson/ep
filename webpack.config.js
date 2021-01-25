const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(
      __dirname,
      "/home/gaet/Bureau/dev web/dyma/js/test/src/index.js"
    ),
    topbar: path.resolve(
      __dirname,
      "/home/gaet/Bureau/dev web/dyma/js/test/src/assets/javascripts/topbar.js"
    ),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/images/*",
          to: "assets/images/[name].[ext]",
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(
        __dirname,
        "/home/gaet/Bureau/dev web/dyma/js/test/src/index.html"
      ),
      chunks: ["main"],
    }),
  ],
  devtool: "source-map",
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    inline: true,
    open: false,
    port: 4000,
    historyApiFallback: {
      index: "index.html",
    },
  },
};
