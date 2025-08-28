<!-- axios-->
<template>
  <div>
    <input type="text" v-model="name" placeholder="用户名" />
    <input type="password" v-model="passwd" placeholder="密码" />
    <input type="button" value="加密登录" @click="login" />
  </div>
</template>

<script>
// SM4 用于对密码或其他信息加密
import { sm4, sm3 } from  'sm-crypto';

// axios 用于发送 HTTP 请求
import axios from 'axios';

// MD5 用于生成 HMAC key
import MD5 from 'crypto-js/md5';
const key = Array.from("dhcctsyh12345678").map(c => c.charCodeAt(0));

export default {
  data() {
    return {
      name: '',
      passwd: '',
    };
  },
  methods: {
    encrypt(text) {
      console.log("key 长度:", key.length);
      return sm4.encrypt(text, key, { mode: 'ecb', cipherType: 'base64' });
    },
    decrypt(cipherBase64) {
      return sm4.decrypt(cipherBase64, key, { mode: 'ecb', cipherType: 'base64' });
    },
    // 对用户名生成 24 字节 key
    generateKey() {
      const passwdkey = "fundsyst"; // 局部变量
      const md5Hex = MD5(passwdkey).toString(); // md5Hex
      const bkeys = Array.from(md5Hex).map(c => c.charCodeAt(0));
      const enk = new Uint8Array(24);
      for (let i = 0; i < 24; i++) {
        enk[i] = bkeys[i];
      }
      return enk;
    },
      // SM3-HMAC 加密
    sm3Hmac(password) {
      const key = this.generateKey();
      return sm3(password, key); // 返回 16 进制字符串
    },
    encryptTest() {
      console.log(sm4.encrypt("admin", key, { mode: 'ecb', cipherType: 'base64' }));
      const plain = this.name || this.passwd; // 你要加密哪个就取哪个
      const cipher = this.encrypt(plain);
      const back = this.decrypt(cipher);

      console.log("原文:", plain);
      console.log("加密:", cipher);
      console.log("解密:", back);
    },
     async login() {
      // 加密用户名和密码
      const encName = this.encrypt(this.name);
      const encPass = this.sm3Hmac(this.passwd);

      console.log("加密用户名:", encName);
      console.log("加密密码:", encPass);

      try {
        const resp = await axios.post("api/auth/login", {
          loginName: encName,
          password: encPass,
        });

        console.log("后端返回:", resp.data);
      } catch (err) {
        console.error("请求失败:", err);
      }
    },
  },
};
</script>
