<template>
  <div class="tabBar">
    <div class="cursor" :style="{'left':this.$store.state.left}"></div>
    <ul class="tabBar-list">
      <li class="item" v-for="(link, index) in links" :key="index">
        <Icon class="icon" :type="type[index]" size="25" color="#fff"></Icon>
        <router-link :to="link.url">
          {{link.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'TarBar',
  data(){
    return {
      left: '0',
      type: ['ios-home-outline', 'ios-search', 'ios-paper-outline', 'ios-person-outline'],
      links:[
        {title: '首页', url: '/'},
        {title: '搜索', url: '/search'},
        {title: '订单', url: '/shopcar'},
        {title: '我的', url: '/mine'},
      ]
    }
  }
}
</script>


<style scoped>
.tabBar{
  height: 49px;
  position: relative;
  background: url("http://img0.imgtn.bdimg.com/it/u=379637932,2839503440&fm=27&gp=0.jpg") center center no-repeat;
  background-size: cover;
}
.cursor{
  width: 25%;
  height: 49px;
  position: absolute;
  top: 0px;
  background: url("http://img4.imgtn.bdimg.com/it/u=2456327101,1342436901&fm=27&gp=0.jpg") center center;
  background-size: cover;
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
.tabBar-list .item:not(:last-child):after{
  content: '';
  width: 1px;
  height: 25px;
  background: #ffffff;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
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
