import ESLintPlugin from "eslint-webpack-plugin";
import { DefinePlugin } from "webpack";
import "webpack-dev-server";
import { merge } from "webpack-merge";

import common from "./webpack.common";

const config = merge(common, {
  mode: "development",
  devtool: "eval",
  output: {
    chunkFilename: `./[name].js`,
    filename: `./[name].js`,
    publicPath: "/",
  },
  devServer: {
    hot: true,
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new DefinePlugin({
      webpackDevServer: true,
    }),
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
      overrideConfigFile: `.eslintrc.json`,
      fix: true,
      failOnError: false,
      emitWarning: true,
    }),
  ],
});

export default config;
