<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>
body {
  margin: 0;
}
#app {
  position: fixed;
  left: 0;
  right: 0;
  height: 100%;
}
</style>
