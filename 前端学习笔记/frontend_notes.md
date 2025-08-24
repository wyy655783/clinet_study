# 前端学习笔记

## Day 1: HTML / CSS / JavaScript 基础

### HTML 基础
- HTML 是构建网页的标记语言，用于定义页面结构。
- 常见标签：`<div>`、`<span>`、`<a>`、`<img>`、`<form>`。

### CSS 基础
- CSS 用于修饰网页样式。
- 三种使用方式：行内样式、内联样式表、外部样式表。
- 常用属性：`color`、`font-size`、`margin`、`padding`、`display`。
- 盒模型：内容(content)、内边距(padding)、边框(border)、外边距(margin)。

### JavaScript 基础
- 三种声明变量方式：`var`、`let`、`const`。
- `let` 和 `const` 具有块级作用域；`var` 是函数作用域。
- `let` 不能重复声明，`var` 可以。

---

## Day 2: Session vs JWT 登录对比

### Session 机制
1. 用户登录时，服务端创建 Session 并保存用户信息。
2. 服务端返回一个 SessionID 存储在 Cookie 中。
3. 每次请求时浏览器携带 Cookie，服务端校验后识别用户。

### JWT 机制
1. 用户登录时，服务端生成 JWT 并返回给前端。
2. 前端保存 JWT（localStorage / sessionStorage / Cookie）。
3. 请求时前端在 `Authorization` Header 中携带 `Bearer Token`。
4. 服务端验证签名并解析 Token。

### 区别
- Session 需要服务端存储，适合小型应用。
- JWT 无需存储，服务端可无状态，适合分布式应用。

---

## Day 3: JavaScript 数据类型与函数

### 基本类型
- `string`、`number`、`boolean`、`null`、`undefined`、`symbol`、`bigint`

### 引用类型
- `Object`、`Array`、`Function`、`Date`、`RegExp`。

### 函数
- 函数声明 vs 函数表达式。
- 箭头函数：`(a, b) => a + b`。
- 函数可以作为参数传递，也可以作为返回值。

---

## 小结
- HTML 定义结构，CSS 定义样式，JS 定义逻辑。
- Session vs JWT 是前后端身份认证的两种模式。
- JS 中区分基本类型和引用类型，掌握函数的不同写法。
