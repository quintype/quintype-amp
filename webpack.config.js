const path = require("path");

const baseConfig = {
  entry: "./src/index.ts",
  target: "node",
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

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    return {
      ...baseConfig,
      devtool: "eval-source-map"
    };
  } else {
    return baseConfig;
  }
};
