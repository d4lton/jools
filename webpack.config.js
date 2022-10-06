const path = require("path");
const pkg = require("./package.json");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV === "development" ? "development" : "production";
const environment = process.env.NODE_ENV || "development";

const config = Object.assign(
  {name: pkg.name, version: pkg.version, environment: environment, mode: mode},
  require(path.join(__dirname, "config", `config.${environment}.json`))
);

module.exports = {
  entry: "./src/index.js",
  mode: mode,
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js"]
  },
  output: {
    path: path.join(__dirname, "build"),
    publicPath: ""
  },
  devServer: {
    static: path.join(__dirname, "static"),
    historyApiFallback: true,
    allowedHosts: "all"
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, "static"),
          to: path.join(__dirname, "build/"),
          filter: (filepath) => filepath !== path.join(__dirname, "static/index.html")
        }
      ]
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, "static", "index.html"),
      templateParameters: {ENV: btoa(JSON.stringify(config))}
    })
  ]
};
