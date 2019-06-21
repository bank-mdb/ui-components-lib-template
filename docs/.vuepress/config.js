const path = require("path");
function resolve(dir) {
  return path.join(__dirname, "..", "..", dir);
}

module.exports = {
  title: "UI 组件库模板工程",
  description: "用于构建 UI组件库模板",
  head: [["link", { rel: "shortcut icon", href: "/favicon.ico" }]],
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    sidebar: [["/views/button", "按钮 Button"]]
  },
  markdown: {
    lineNumbers: false
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": resolve("docs"),
        "@src": resolve("src"),
        "@scss": resolve("src/style"),
        "@components": resolve("src/components"),
        "@utils": resolve("src/utils")
      }
    }
  }
};
