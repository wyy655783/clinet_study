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





## 📌 Axios 基础知识

### 1. 安装

```
npm install axios -s
```

axios 它的底层是用了XMLHttpRequest(xhr)方式发送请求和接收响应，xhr相对于之前讲过的 fetch ap1来说，功能更强大，但由于是比较老的 api，不支持 Promise，axios 对 xhr进行了封装，使之支持 Promise，并提供了对请求、响应的统一拦戳功能

------

### 2. 创建实例

```
import axios from 'axios';

// 创建带有默认配置的实例
const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000, // 请求超时时间
  headers: { 'X-Custom-Header': 'foobar' }
});
```

------

### 3. 请求方法

Axios 封装了常见的 HTTP 方法，底层都是基于 **XMLHttpRequest (XHR)**，支持 `Promise`。

```
// 通用请求方式
axios.request({
  url: '/user',
  method: 'get'
});

// GET 请求
axios.get('/user', {
  params: { id: 123 }
});

// POST 请求
axios.post('/user', {
  name: 'Tom',
  age: 20
});

// PUT 请求
axios.put('/user/123', { name: 'Jerry' });

// DELETE 请求
axios.delete('/user/123');
```

------

### 4. 响应结构

Axios 的响应对象格式：

```
{
  data: {},       // 服务端返回的数据
  status: 200,    // HTTP 状态码
  statusText: 'OK',
  headers: {},    // 响应头
  config: {},     // 请求时的配置信息
  request: {}     // 产生这次响应的请求对象
}
```

------

### 5. 拦截器

拦截器可以在请求发出前、响应返回后进行统一处理：

```
// 请求拦截器
axios.interceptors.request.use(config => {
  console.log('发送请求之前', config);
  // 比如：添加 token
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(response => {
  console.log('响应数据', response);
  return response.data; // 直接返回 data
}, error => {
  return Promise.reject(error);
});
```

------

### 6. 对比 Fetch

- `fetch` 是原生的 API，但不支持拦截器，需要自己封装。
- `axios` 封装了 XHR，自带 **Promise 支持 + 拦截器 + JSON 自动转换**，更适合业务开发。