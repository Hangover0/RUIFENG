<template>
  <div id="app">
    <Counter :stock="10" @numchange="getNum"/>
  </div>
</template>


<script>
import Counter from './components/counter'

export default {
  name: 'App',
  components: {
    Counter
  },
  methods:{
    getNum(num){
      console.log(`商品数量: ${num}`);
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
  margin-top: 60px;
}
</style>
