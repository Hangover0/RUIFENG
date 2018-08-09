<template>
  <div id="app">
    <menuNav @menuClick="tab"/>
    <component :is="curpage"></component>
    <boss />
  </div>
</template>

<script>
import Parent from './components/Parent'
import boss from './components/boss'
import jokegraph from './components/paging/jokegraph'
import joketext from './components/paging/joketext'
import jokeimg from './components/paging/jokeimg'
import menuNav from './components/paging/menuNav'
export default {
  name: 'App',
  data(){
    return {
      curpage: 'joketext'
    }
  },
  components: {
    Parent,
    jokegraph,
    joketext,
    jokeimg,
    menuNav,
    boss
  },
  methods: {
    tab(data){
      this.curpage = data;
    }
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
}
</style>
