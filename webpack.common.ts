import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import { type Configuration } from "webpack";

const config: Configuration = {
  entry: {
    app: ["./src/index.tsx"]
  },
  optimization: {
    moduleIds: "named",
    splitChunks: {
      chunks: "all",
      name: false
    },
    usedExports: true
  },
  resolve: {
    alias: {
      "@src": resolve(__dirname, "src/")
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      },
      {
        test: /logo192\.png$/,
        use: {
          loader: 'file-loader'
          // options: {
          //   name: '[name].[contenthash].[ext]', // Optional, defines the output filename pattern
          //   outputPath: 'images/', // Optional, specifies the output directory for the images
          //   publicPath: 'images/', // Optional, specifies the public URL path for the images
          // },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["app"],
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      inject: true
    })
  ]
};

export default config;
