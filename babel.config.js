module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      // 将polyfill功能按需引入
      {
        "useBuiltIns": "usage",
      },
    ],
  ],
};
