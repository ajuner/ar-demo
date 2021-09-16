const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = 9000;

module.exports = {
  entry: "./src/index.ts",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".d.ts"],
  },
  output: {
    filename: `out.js`,
  },
  mode: 'development',
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  stats: "errors-only",
  devServer: {
    port: port,
  },
};