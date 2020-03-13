import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";

export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist",
      format: "cjs"
    }
  ],
  external: [...Object.keys(pkg.peerDependencies || {}), "stream"],
  plugins: [
    resolve({
      preferBuiltins: true
    }),
    url(),
    typescript({
      objectHashIgnoreUnknownHack: false,
      clean: true
    }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/react/index.js": ["cloneElement", "createContext", "Component", "createElement"],
        "node_modules/react-dom/index.js": ["render", "hydrate"],
        "node_modules/react-is/index.js": ["isElement", "isValidElementType", "ForwardRef"]
      }
    }),
    terser()
  ]
};
