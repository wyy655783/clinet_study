<!-- 文本插值 -->
<template>
    <div class="exp1">
        <h1>Experiment 1: Basic Data Binding</h1>
        <p>This experiment demonstrates basic data binding in Vue.js.</p>
        <div>
        <label for="inputText">Enter some text:</label>
        <input id="inputText" v-model="userInput" placeholder="Type something..." />
        </div>
        <div>
        <h2>You entered: {{username}} {{(age+10) > 60 ? '老年' : '青年'}}</h2>
        <p>{{ userInput }}</p>
        </div>
    </div>
</template>
<script>
    const options = {
        data() {
            return {
                userInput: 'vue is great!',
                username: 'VueUser',
                age: 25
            };
        }
    };
    export default options;
</script>