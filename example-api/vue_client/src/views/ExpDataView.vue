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
      const resp = await _axios.post('/getUs', {});
      console.log(resp);
    },
  },
};
</script>
