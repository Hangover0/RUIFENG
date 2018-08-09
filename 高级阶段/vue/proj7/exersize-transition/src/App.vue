<template>
  <div id="app">
    <transition name="fade">
      <ul class="menu-list">
        <li><router-link :to="links.home">首页</router-link></li>
        <li><router-link :to="links.news">新闻</router-link></li>
      </ul>
    </transition>
    <transition  :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      links:{
        home: '/',
        news: '/news'
      },
      transitionName: ''
    }
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  margin: 0px;
  padding: 0px;
}
.menu-list{
  width: 400px;
  height: 35px;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.menu-list li{
  display: inline-block;
  width: 50%;
  background: #eeeeee;
  line-height: 35px;
}
.menu-list li:hover{
  background: orange;
}
.content{
  width: 400px;
  height: 700px;
  background: pink;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.fade-enter-active,
.fade-leave-active{
  transition: all .5s linear;
}

</style>
