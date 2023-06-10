import { resolve } from "path";
import { DefinePlugin } from "webpack";
import { merge } from "webpack-merge";
import { GenerateSW } from "workbox-webpack-plugin";

import common from "./webpack.common";

const config = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    path: resolve(__dirname, "dist")
  },
  optimization: {
    minimize: true
  },
  cache: {
    type: "filesystem",
    compression: "gzip",
    buildDependencies: {
      config: [__filename]
    }
  },
  plugins: [
    new DefinePlugin({
      webpackDevServer: false
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
});

export default config;