const path = require("path");
const webpack = require("webpack");
const HTMLPlugin = require("html-webpack-plugin");

const HOT_MIDDLEWARE_SCRIPT = "webpack-hot-middleware/client?reload=true";

const config = {
  mode: "development",
  entry: [path.join(__dirname, "../app/index.js"), HOT_MIDDLEWARE_SCRIPT],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../dist/client/")
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["react", "stage-2"]
        },
        exclude: [path.join(__dirname, "../node_modules/")]
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLPlugin({
      template: path.join(__dirname, "../app/index.html"),
      filename: "index.html",
      inject: "body"
    })
  ],

  devtool: "source-map"
};

module.exports = config;
