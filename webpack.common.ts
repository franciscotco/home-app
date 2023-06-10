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
    extensions: [".tsx", ".ts", ".js", ".jsx"]
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["app"]
    })
  ]
};

export default config;
