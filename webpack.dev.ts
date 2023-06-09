import { DefinePlugin } from "webpack";
import "webpack-dev-server";
import { merge } from "webpack-merge";
import { GenerateSW } from "workbox-webpack-plugin";

import common from "./webpack.common";

const config = merge(common, {
  mode: "development",
  devtool: "eval",
  output: {
    chunkFilename: `./[name].js`,
    filename: `./[name].js`,
    publicPath: "/"
  },
  devServer: {
    hot: true,
    port: 3000,
    compress: true,
    historyApiFallback: true
  },
  plugins: [
    new DefinePlugin({
      webpackDevServer: true
    }),
    new GenerateSW({
      
    })
  ]
});

export default config;