<template>
  <div id="app">
    <menuNav />
    <router-view />
  </div>
</template>

<script>
import menuNav from './components/menuNav'
export default {
  name: 'App',
  components: {
    menuNav
  },
  methods:{

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
