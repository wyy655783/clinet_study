<template>
  <div id="app">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
const options = {
  data: function() {
    return {msg: 'Hello Vue!'};
  }
};
export default options;
</script>