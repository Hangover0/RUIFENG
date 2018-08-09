<template>
  <div class="tabBar">
    <!-- 游标 -->
    <div class="cursor" :style="{'left':this.$store.state.left}"></div>
    <!-- 菜单项 -->
    <ul class="tabBar-list">
      <li class="item" v-for="(link, index) in links" :key="index">
        <Icon :type="types[index]" size="25" color="#fff" class="icon"></Icon>
        <router-link :to="link.url">
          {{link.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'Tabbar',
  data(){
    return {
      left: '0',
      types:[
        'ios-home',
        'ios-search-strong',
        'ios-cart',
        'ios-person'
      ],
      links:[
        {title:'主页',url:'/'},
        {title:'搜索',url:'/search'},
        {title:'购物车',url:'/shopcar'},
        {title:'个人',url:'/mine'}
      ]
    }
  },
}
</script>


<style scoped>
.tabBar{
  height: 49px;
  position: relative;
  background: #333333;
}
.cursor{
  width: 25%;
  height: 49px;
  position: absolute;
  top: 0px;
  background: pink;
  transition: left .25s linear;
}
.tabBar-list .item{
  width: 25%;
  height: 49px;
  background: transparent;
  cursor: pointer;
  float: left;
  position: relative;
  padding: 3px 0;
}
.tabBar-list .item  a{
  color: #ffffff;
  font-size: 11px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  z-index: 1;
}
.icon{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
