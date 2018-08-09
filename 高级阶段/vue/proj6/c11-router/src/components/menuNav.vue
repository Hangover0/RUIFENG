<template>
  <div>
    <ul class="menu-list">
      <li>
        <router-link exact :to="links.home">主页</router-link>
      </li>
      <li>
        <!-- <router-link :to="links.news">新闻</router-link> -->
        <!-- <router-link to="/news/vv/18/student">新闻</router-link> -->
        <!-- 注意：使用path会忽略params参数 -->
        <router-link :to="{name:'news',params:{name: 'vv',age: '18',job: 'student'}}">新闻</router-link>
      </li>
      <li>
        <!-- <router-link :to="links.about">关于</router-link> -->
        <router-link :to="{path:links.about,query:{weather:'成都-烈日'}}">关于</router-link>
      </li>
      <li>
        <router-link :to="links.course">课程</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'menuNav',
  data(){
    return {
      links:{
        home: '/',
        about: '/about',
        news: '/news',
        course: '/course'
      }
    }
  }
}
</script>


<style scoped>
.menu-list{
  width: 400px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  background: pink;
}
.menu-list li{
  width: 24%;
  display: inline-block;
  color: #000;
  line-height: 35px;
}
</style>
