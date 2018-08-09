<template>
  <div id="app">
    <TransAnim />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import TransAnim from './components/transition'
export default {
  name: 'App',
  components: {
    TransAnim
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
