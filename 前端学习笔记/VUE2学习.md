# VUE二

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



## 二、Axios 常用请求方法拆解（4 种核心方法）

Axios 提供「通用方法 `axios(config)`」和「快捷方法（如 `axios.get`/`axios.post`）」，快捷方法本质是对通用方法的封装，仅需传入关键参数（URL、数据、配置），无需手动指定 `method`。以下是 4 种最常用方法的参数、场景与示例：

### 1. GET：查询数据（无请求体，参数拼在 URL 或 `params` 中）

- **核心逻辑**：用于获取资源（如列表、详情），参数通过 `params` 配置自动拼接到 URL 后（如 `https://api.com/user?id=123`），无请求体（body）。

- 参数格式：

  ```
  axios.get(url[, config])
  ```

  - `url`：必选，请求地址（如 `/api/user`）；
  - `config`：可选，请求配置（核心用 `params` 传参，其他如 `headers`）。

- 流程示例：

  ```javascript
  // 1. 发起 GET 请求：参数通过 params 传入
  axios.get('/api/user', {
    params: { id: 123 }, // 自动拼为 URL：/api/user?id=123
    headers: { 'Content-Type': 'application/json' }
  })
  // 2. 响应拦截器（假设统一解包 data.data）
  .then(response => console.log('用户数据：', response.data)) 
  // 3. 错误处理
  .catch(error => console.error('请求失败：', error.message));
  ```

### 2. POST：提交数据（有请求体，参数在 `data` 中）

- **核心逻辑**：用于提交资源（如创建用户、提交表单），参数通过 `data` 放入请求体（body），需指定 `Content-Type` 匹配数据格式（如 `application/json`、`multipart/form-data`）。

- 参数格式：

  ```
  axios.post(url[, data[, config]])
  ```

  - `url`：必选，请求地址；
  - `data`：可选，请求体数据（如 JSON 对象、FormData）；
  - `config`：可选，请求配置（如 `headers`、`timeout`）。

- 流程示例（JSON 数据）：

  ```javascript
  // 1. 准备提交的数据（JSON 格式）
  const userData = { name: '张三', age: 20 };
  // 2. 发起 POST 请求：数据放入 data，指定 Content-Type
  axios.post('/api/user', userData, {
    headers: { 'Content-Type': 'application/json' } // 默认就是 JSON，可省略
  })
  .then(response => console.log('创建成功：', response.data))
  .catch(error => console.error('创建失败：', error.message));
  ```

- 特殊场景（表单提交）：若提交表单数据，需用FormData格式，并指定

  ```
  Content-Type: multipart/form-data
  ```

  （Axios 可自动识别 FormData 并设置，可省略）：

  ```javascript
  const formData = new FormData();
  formData.append('name', '张三');
  formData.append('avatar', file); // 上传文件
  axios.post('/api/upload', formData);
  ```

### 3. PUT：更新数据（全量更新，有请求体）

- **核心逻辑**：用于全量更新资源（如替换用户所有信息），语义上表示 “覆盖”，参数格式与 POST 一致（数据在 `data` 中），仅 `method` 为 `put`。

- **参数格式**：`axios.put(url[, data[, config]])`

- 场景示例

  ：更新用户 ID=123 的所有信息（覆盖原有数据）：

  ```javascript
  axios.put('/api/user/123', { name: '李四', age: 22 })
  .then(res => console.log('更新成功：', res.data))
  .catch(err => console.error('更新失败：', err));
  ```

### 4. DELETE：删除数据（参数位置灵活）

- **核心逻辑**：用于删除资源，参数可通过 `params` 拼在 URL 后，或通过 `data` 放入请求体（部分后端支持），语义上表示 “删除指定资源”。

- **参数格式**：`axios.delete(url[, config])`（参数通过 `config` 中的 `params` 或 `data` 传递）

- 场景示例（URL 传参）

  ```javascript
  // 参数通过 params 拼在 URL：/api/user?id=123
  axios.delete('/api/user', { params: { id: 123 } })
  .then(res => console.log('删除成功：', res.data))
  .catch(err => console.error('删除失败：', err));
  ```

## 三、Axios 实例化与配置（进阶用法）

当项目中存在多组 API（如 “用户模块 API”“订单模块 API”），且基础配置（如 `baseURL`、`timeout`）不同时，可通过 `axios.create()` 创建实例，避免重复配置：

```javascript
// 1. 创建“用户模块”实例：指定专属 baseURL 和超时时间
const userAxios = axios.create({
  baseURL: 'https://api.com/user', // 所有请求自动拼接前缀
  timeout: 5000, // 超时时间 5 秒
  headers: { 'Authorization': 'Bearer ' + token } // 统一携带 Token
});

// 2. 使用实例发起请求（无需重复写 baseURL）
userAxios.get('/123') // 实际 URL：https://api.com/user/123
.then(res => console.log(res.data));

// 3. 给实例单独加拦截器（不影响全局）
userAxios.interceptors.response.use(
  res => res.data, // 实例内统一解包
  err => { /* 实例专属错误处理 */ }
);
```

## 四、关键注意点

1. **错误捕获**：网络错误（如断网）、4xx/5xx 状态码都会进入 `catch`，可通过 `error.response.status` 判断错误类型。
2. **取消请求**：通过 `CancelToken` 可取消未完成的请求（如切换页面时取消列表请求），Axios v0.22.0+ 也支持 `AbortController`。
3. **跨域处理**：浏览器端跨域需后端配置 CORS（如 `Access-Control-Allow-Origin`），Axios 无需额外配置，仅需确保请求符合 CORS 规则。
4. **数据格式**：发送 JSON 数据时 `Content-Type` 默认为 `application/json`，发送表单 / 文件时需用 `FormData`（Axios 自动适配 `Content-Type`）。

```js
    async sendRequest() {
      // axios
      //   .get('/api/hello')
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      //const resp = await axios.post('/api/api/p2');

      //222222222
      // const resp = await axios.post('/api/p3',{},{
      //   headers: {
      //     'Authorization':'abcccc',
      //     'Content-Type': 'application/json',
      //   },
      // });
      //33333333
      // const resp = await axios.post('/api/p4',{},{
      //   params:{
      //     name:'&&&&&',
      //     age:18
      //   }
      // });
      //44444444    格式urlencoded
    
      // const params = new URLSearchParams();
      // params.append('name', '中文');
      // params.append('age', 18);

      // const resp = await axios.post('/api/p4',params);

      //55555555    multipart格式
    
      // const formData = new FormData();
      // formData.append('name', '中&&文');
      // formData.append('age', 18);
      // formData.append('id','1023');
      //   formData.append('sex','男');

      // const resp = await axios.post('/api/p5',formData)

      //6666666  响应数据类型

      const resp = await axios.post('/api/p5toJson', {
        name: '中文',
        age: 18,  
        id: 1001,
        // sex: '男'
      });

      console.log(resp);
```



