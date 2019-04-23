# webpack 学习
> 模块打包机，打包所有的资源、脚本、图片、样式表，自动刷新，代码校验
# webpack 下载
- npm install yarn -g
## 项目初始化
- 新建一个文件夹
- cd webpack 执行 yarn init -y
- 创建一个src文件夹，里面创建一个index.js文件

## 安装webpack
- 本地安装
```
yarn add webpack webpack-cli -D
```
- 创建.gitignore文件
- webpack可以进行0配置，直接运行npx webpack

## 配置webpcak
- 创建 webpack.config.js 文件
```
const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
- 配置 package.json 设置npm脚本,执行npm run build
```
"scripts":{
    "build":"webpack"
},
```
- 设定 HtmlWebpackPlugin
```
yarn add html-webpack-plugin -D
```
- 配置
```
plugins: [//插件
        new HtmlWebpackPlugin({//自动生成html文件并打包
            title:'webpack',
            template:'./src/index.html',
            hash:true,
            minify:{
                collapseWhitespace:true
            }
})
```
- 设置 clean-webpack-plugin 插件，清除原来产生的bundle文件
```
yarn add clean-webpack-plugin -D
```

- 设置webpack-dev-server ,执行npx webpack-dev-server
- 生成内存中的index.html，并执行  http://localhost:8080/
```
yarn add webpack-dev-server -D
```

- package.json中配置start ,直接执行npm start就可以启动服务,改变代码后会自动刷新
```
"scripts": {
    "build": "webpack",
    "start":"webpack-dev-server --open"
},
```

- 可配置webpack.config.js改变端口
```
 devServer:{//
        port:3000
},
```

### loader
- style-loader css-loader
```
yarn add style-loader css-loader -D
```
- less-loader 需要下载less模块
```
yarn add less less-loader -D
```


### mini-css-extract-plugin插件  抽取css
- 安装 yarn add mini-css-extract-plugin -D
```
配置代码：
loader中
{
    test:/\.css$/,
    use:[
        {
            loader: MiniCssExtractPlugin.loader,bn n
        },
        'css-loader'
    ]
},
插件中
new MiniCssExtractPlugin({
    filename: 'index.css',
}),
```

### babel-loader  babel编译 将ES6编译成ES5
- yarn add -D babel-loader @babel/core @babel/preset-env

###  将其安装为开发依赖项。
- yarn add @babel/plugin-transform-runtime -D

### 并@babel/runtime作为生产依赖
- yarn add @babel/runtime

###  类
- yarn add @babel/plugin-proposal-class-properties -D

###  搭建react环境
- yarn add react react-dom
- yarn add @babel/preset-react -D  
- yarn add react-router-dom

# 2019/4/18
## 下载
- yarn add antd-mobile

## 引入样式
- yarn add babel-plugin-import -D

## 插入图片
- yarn add file-loader -D
```
{
    test: /\.(png|jpg|gif)$/,
    use: [
        {
            loader: 'file-loader',
            options: {}
        }
    ]

```

## 服务
- yarn add express
- yarn add axios
- 编辑server.js文件 node启动