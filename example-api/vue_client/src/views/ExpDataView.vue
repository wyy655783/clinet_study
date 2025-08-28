<!-- axios-->
<template>
  <div>
    <input type="button" value="获取数据" @click="sendRequest()" />
  </div>
</template>

<script>
import axios from 'axios';
export default {
  methods: {
    async sendRequest() {
      const _axios = axios.create({
        baseURL: 'http://localhost:8080',
        withCredentials: true,
      });
      try {
        const resp = await _axios.get('/getUs');
        console.log(resp);
      } catch (error) {
        const { status } = error.response;
        console.log(error.response);
        switch (status) {
          case 400:
            console.error('请求参数错误');
            break;
          case 401:
            console.error('未授权，请登录');
            break;
          case 403:
            console.error('没有权限');
            break;
          case 404:
            console.error('资源不存在');
            break;
          case 500:
            console.error('服务器错误');
            break;
          default:
            console.error('未知错误');
        }
      }
    },
  },
};
</script>
