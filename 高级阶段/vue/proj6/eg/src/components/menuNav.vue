<template>
<div>
  <ul class="menu-list">
    <li>
      <router-link :to="links.home">主页</router-link>
    </li>
    <li>
      <router-link :to="links.news">新闻</router-link>
    </li>
    <li>
      <router-link :to="links.about">关于</router-link>
    </li>
    <li>
      <router-link :to="links.course">课程</router-link>
    </li>
  </ul>
</div>
</template>


<script>
export default {
  name:'menuNav',
  data(){
    return {
      links:{
        home:'/',
        news: '/news',
        about: '/about',
        course: '/course'
      }
    }
  }
}
</script>


<style>

</style>
