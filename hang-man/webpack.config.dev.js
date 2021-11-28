const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  // The application entry point
  entry: "./src/main.js",

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      //use babel-loader to transpile js files
      {
        test: /\.js$/,
        loader: "babel-loader",
      },

      // css-loader to bundle all the css files into one file and vue-style-loader
      // to add all the styles inside the <style> block in `.vue` file.
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "./public"),
    port: 3000,
    publicPath: "/dist/",
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
  ],
};
