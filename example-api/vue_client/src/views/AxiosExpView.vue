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

      // const resp = await axios.post('/api/p5toJson', {
      //   name: '中文',
      //   age: 18,
      //   id: 1001,
      //   // sex: '男'
      // });

      const _axios = axios.create({
        baseURL: 'http://localhost:8080',
        withCredentials: true,
      });
      // const resp = await _axios.post('/p5toJson', {
      //   name: '中文',
      //   age: 18,
      //   id: 1001,
      //   // sex: '男'
      // });
      await _axios.post('/a6set', {});
      await _axios.post('/a6get', {});
      //console.log(resp);
    },
  },
};
</script>
