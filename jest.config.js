module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js$": "babel-jest" // added this
  },
  setupFiles: ["<rootDir>/jest-setup.js"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testTimeout: 90000,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^cheerio$": "<rootDir>/node_modules/cheerio/dist/commonjs/index.js" //mapping cheerio to use its commonjs version
  },
  transformIgnorePatterns: [
    "node_modules/(?!(cheerio|parse5|domhandler|domutils|css-select|nth-check|boolbase|enzyme|enzyme-to-json|enzyme-adapter-react-18|@cfaester|undici)/)" //include the necessary packages
  ],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  globals: {
    "ts-jest": {
      useESM: true
    },
    TextEncoder: require("util").TextEncoder,
    TextDecoder: require("util").TextDecoder
  }
};
