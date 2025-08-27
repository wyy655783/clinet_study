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
      const resp = await axios.get('/api/hello');
      console.log(resp);
    },
  },
};
</script>
