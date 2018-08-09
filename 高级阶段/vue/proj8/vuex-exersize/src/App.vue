<template>
  <div id="app">
    <router-view/>
    <TarBar />
  </div>
</template>

<script>
import TarBar from './components/tabBar'
import store  from './store'
export default {
  name: 'App',
  data(){
    return {
      isTabBar: true
    }
  },
  components:{
    TarBar,
  },
  watch:{
    $route(to, from){
      if(to.name == 'details'){
        console.log(111111);
        //this.$store.commit('changeIsShowTar', false);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.container{
  height: calc(100% - 49px);
}
.content{
  overflow-y: scroll;
}
</style>
