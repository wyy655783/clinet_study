# VUE2

## 1、环境准备

安装脚手架

```shell
npm install -g @vue/cli
```

创建项目

```shell
vue ui
```

- 使用图形向导创建vue项目，勾选router和vuex

安装devtools

- 安装谷歌插件devtools

修改端口

- 文档地址  [Webpack 官网](https://webpack.js.org/configuration/dev-server/#devserver)

添加代理

```js
  devServer: {
    port: 7080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 后端接口地址
        changeOrigin: true, // 是否跨域
        pathRewrite: { '^/api': '' }
      }
    }
  }
```

## 2、vue基础

### 项目结构

```js
C:\USERS\WYY65\DOCUMENTS\CLINET_STUDY\EXAMPLE-API\VUE_CLIENT\SRC
├─assets
├─components
├─router
├─store
└─views
```

- assets   ---静态资源
- components   ---可重用组件
- router   ---路由
- store   ---数据共享
- views   ---视图组件

后面还会添加

- api  ---跟后台交互、发送fetch、xhr请求、接收响应
- plugins  ---插件

### VUE组件

vue的组件以.vue结尾，每个组件由三部分组成

```vue
<template></template>
<script></script>
<style></style>
```

template模板部分，由它生成html代码

script代码部分，控制模板的数据来源和行为

style样式部分，渲染页面