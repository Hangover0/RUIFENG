<template>
  <div id="app">
    <ul class="menu-list">
      <li data-page="home" @click="btnClick">主页</li>
      <li data-page="news" @click="btnClick">新闻</li>
      <li data-page="about" @click="btnClick">关于</li>
    </ul>
    <div class="container">
      <transition name="btnfade">
      <component :is="page" mode="in-out"></component>
      </transition>
    </div>
    <!-- <TransAnim /> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import TransAnim from './components/transition'
import Home from './components/home'
import News from './components/news'
import About from './components/about'
export default {
  name: 'App',
  data(){
    return {
      page: 'Home'
    }
  },
  components: {
    TransAnim,
    Home,
    News,
    About
  },
  methods: {
    btnClick(e){
      this.page = e.target.dataset.page
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
.menu-list{
  cursor: pointer;
  list-style: none;
}
.menu-list li{
  display: inline-block;
}
.container{
  margin: 0 auto;
  width: 400px;
  height: 300px;
  position: relative;
}
.content{
  width: 400px;
  height: 300px;
  background: pink;
  position: absolute;
  top: 0px;
  left: 0px;
}
.btnfade-enter-active,
.btnfade-leave-active{
  transition: all .5s linear;
}
.btnfade-enter,
.btnfade-leave-to{
  opacity: 0;
  transform: translateX(0)
}
.btnfade-leave,
.btnfade-enter-to{
  opacity: 1;
  transform: translateX(-100px)
}
</style>
