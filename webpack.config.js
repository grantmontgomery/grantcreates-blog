const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader, css-loader"],
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    modules: [__dirname, "src", "node_modules"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    hot: true,
    host: "0.0.0.0",
    open: "Google Chrome",
  },
};
