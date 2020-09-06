## 从零开始配置 vue-cli 脚手架

### 设置 webpack 的入口

### 添加处理 es6/7/8 语法解析

安装 babel 依赖
将 ES6/7/8 语法转换为 ES5 语法

```js
yarn add babel-loader @babel/core @babel/preset-env -D
```

安装 babel-polyfill 对新 api 进行转换

```js
yarn add @babel/polyfill -D
```
