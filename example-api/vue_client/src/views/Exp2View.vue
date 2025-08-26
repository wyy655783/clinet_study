<!-- 属性绑定 -->
<template>
    <div>
        <div><input type="text" v-bind:value="name" /></div>
        <div><input type="date" v-bind:value="birth" /></div>
        <div><input type="text" :value="age" /></div>
    </div>
</template>

<script>
    export default {
        data() {
            return  {
             name: 'Exp2View',
             birth: '2000-01-01',
             age: 20
            };
        }
    };
</script>