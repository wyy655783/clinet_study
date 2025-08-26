<!-- 双向绑定 -->
<template>
  <div>
    <div>
      <label for="">请输入名称:</label>
      <input type="text" v-model="name" />
    </div>
    <div>
      <label for="">请输入电话:</label>
      <input type="text" v-model="tel" />
    </div>
    <div>
      <label for="">请选择性别:</label>
      男 <input type="radio" value="男" v-model="sex" /> 女
      <input type="radio" value="女" v-model="sex" />
    </div>
    <div>
      <label for="">请选择爱好:</label>
      打球<input type="checkbox" value="打球" v-model="fav" /> 跑步<input
        type="checkbox"
        value="跑步"
        v-model="fav"
      />
      游泳<input type="checkbox" value="游泳" v-model="fav" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'aaa',
      tel: null,
      sex: '男',
      fav: ['游泳'],
    };
  },
  methods: {
    name1() {
      this.counter += 1;
      console.log(this.name);
    },
    name2() {
      this.counter -= 1;
      console.log(this.age);
    },
  },
};
</script>
