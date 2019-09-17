import json from "rollup-plugin-json";
import babel from "rollup-plugin-babel";
import vue from "rollup-plugin-vue";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import bundleSize from "rollup-plugin-filesize";
import pkg from "./package.json";

export default {
  input: "./src/index.js",
  output: [
    {
      file: "./dist/index.cjs.js",
      format: "cjs",
      external: ["vue"]
    },
    {
      file: "./dist/index.esm.js",
      format: "es",
      external: ["vue"]
    },
    {
      file: "./dist/index.umd.js",
      format: "umd",
      name: "Test",
      globals: {
        vue: "Vue"
      },
      external: Object.keys(pkg.dependencies)
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    vue(),
    postcss(),
    babel({
      exclude: "node_modules/**"
    }),
    json(),
    terser({
      output: {
        ascii_only: true // 仅输出ascii字符
      },
      compress: {
        pure_funcs: ["console.log"] // 去掉console.log函数
      }
    }),
    bundleSize()
  ]
};
