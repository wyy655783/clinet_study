<!-- 计算属性 computed-->
<template>
  <div>
    <h1>{{ lastName }}{{ firstName }}</h1>
    <h1>{{ pixName() }}</h1>
    <h1>{{ fullName }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '三',
      lastName: '赵',
    };
  },
  methods: {
    pixName() {
      return this.lastName + this.firstName;
    },
    name2() {
      this.counter -= 1;
      console.log(this.age);
    },
  },
  computed: {
    fullName() {
      console.log('进入 computed');
      return this.lastName + this.firstName;
    },
  },
};
</script>
