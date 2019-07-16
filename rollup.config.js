import babel from "rollup-plugin-babel";
import vue from "rollup-plugin-vue";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

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
      external: ["vue"]
    }
  ],
  plugins: [
    vue(),
    postcss(),
    resolve(),
    commonjs(),
    resolve(),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs(),
    terser({
      output: {
        ascii_only: true // 仅输出ascii字符
      },
      compress: {
        pure_funcs: ["console.log"] // 去掉console.log函数
      }
    })
  ]
};
