const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }
    ]
  },
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
    library: "amp"
  },
  plugins: []
};
