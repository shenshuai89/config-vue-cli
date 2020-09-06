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

### 配置 scss 转换 css

安装依赖

```
yarn add sass-loader dart-sass css-loader style-loader -D
```

- sass-loader, dart-sass 主要是将 scss/sass 语法转为 css
- css-loader 主要是解析 css 文件
- style-loader 主要是将 css 解析到 html 页面 的 style 上

##### postcss 实现自动添加css3

安装依赖

```
yarn add postcss-loader autoprefixer -D
```

### 使用 `html-webpack-plugin`来创建html页面

安装依赖yarn add html-webpack-plugin -D

在webpack的plugins中设置

```
new HtmlWebpackPlugin({
    title: "vue-cli从零配置",
    template: path.resolve(__dirname, "../public/index.html"),
}),
```

### 配置 devServer 热更新功能

安装依赖  yarn add  webpack-dev-server -D

通过配置 `devServer` 和 `HotModuleReplacementPlugin` 插件来实现热更新

注意：output中的publicPath:'/'一定要设置正确的路径

```
const path = require("path");
const webpack = require("webpack");  //第二步
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "../src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[hash:8].js",
    chunkFilename: "js/[name].[hash:8].js",
    // 设置在浏览器中所引用的url
    publicPath: "/",
  },
  module: {
    //...
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),  //第三步
  ],
  devServer: {
    hot: true,  //第一步
    open: true,
    inline: true,
    compress: true,
    port: 3000,
    contentBase: path.join(__dirname, "../dist"),
  },
};
```

### 配置 webpack 打包 图片、媒体、字体等文件

安装依赖  yarn add file-loader url-loader -D

1. `file-loader` 解析文件url，并将文件复制到输出的目录中
2. `url-loader` 功能与 `file-loader` 类似，如果文件小于限制的大小。则会返回 `base64` 编码，否则使用 `file-loader` 将文件复制到输出的目录中

### 让 `webpack` 识别 `.vue` 文件

安装依赖

```
yarn add vue-loader vue-template-compiler cache-loader thread-loader -D
yarn add vue
```

1. `vue-loader` 用于解析`.vue`文件
2. `vue-template-compiler` 用于编译模板
3. `cache-loader` 用于缓存`loader`编译的结果
4. `thread-loader` 使用 `worker` 池来运行`loader`，每个 `worker` 都是一个 `node.js` 进程

### 插件定义环境变量

通过 `webpack`提供的`DefinePlugin`插件，可以很方便的定义环境变量

```
plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        VUE_APP_BASE_URL: JSON.stringify('http://localhost:3000')
      }
    }),
]
```

### 区分生产环境和开发环境

1. `webpack.dev.js` 开发环境使用
2. `webpack.prod.js` 生产环境使用
3. `webpack.config.js` 公用配置

#### 开发环境和生产环境的区别

##### 开发环境

1. 不需要压缩代码
2. 需要热更新
3. css不需要提取到css文件
4. sourceMap

##### 生产环境

1. 压缩代码
2. 不需要热更新
3. 提取css，压缩css文件
4. sourceMap
5. 构建前清除上一次构建的内容

安装依赖

```
yarn add @intervolga/optimize-cssnano-plugin mini-css-extract-plugin clean-webpack-plugin webpack-merge copy-webpack-plugin -D
```

`@intervolga/optimize-cssnano-plugin` 用于压缩css代码

`mini-css-extract-plugin` 用于提取css到文件中

`clean-webpack-plugin` 用于删除上次构建的文件

`webpack-merge` 合并 `webpack`配置，merge作为一个对象的方法被导出的，需要解构

`copy-webpack-plugin` 用户拷贝静态资源

### 打包分析

使用插件webpack-bundle-analyzer

```
yarn add webpack-bundle-analyzer
```

在插件中使用

```
plugins:[
	new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
]
```

### 集成vue-router和vuex

#### 通过@babel/plugin-syntax-dynamic-import实现路由懒加载

```
yarn add @babel/plugin-syntax-dynamic-import --save-dev
```



### 运行项目

yarn serve开发环境

yarn build打包项目



### 分支管理

- cli1：配置好基本的loader
- cli2：区分开发和生产环境的config
- cli3：集成vue-router和vuex