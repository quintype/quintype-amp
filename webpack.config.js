const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
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
