<!-- 事件绑定 -->
<template>
    <div>
        <div><input type="button" value="counter++" v-on:click='name1' /></div>
        <div><input type="button" value="counter--" @click='name2' /></div>
        <div>counter: <input type="text" :value="counter" /></div>
   
    </div>
</template>

<script>
    export default {
        data() {
            return  {
                counter: 0,
             name: 'Exp2View',
             birth: '2000-01-01',
             age: 20
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
           }
        }
    };
</script>