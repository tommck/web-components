import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  plugins: [resolve(), typescript()],
  output: [{ file: pkg.module, format: "esm", sourcemap: true }],
};
