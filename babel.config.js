module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      // 将polyfill功能按需引入
      {
        "useBuiltIns": "entry",
        "corejs": "3",
      },
    ],
  ],
  plugins: [
    // 添加这个，设置组件懒加载
    "@babel/plugin-syntax-dynamic-import",
  ],
};
