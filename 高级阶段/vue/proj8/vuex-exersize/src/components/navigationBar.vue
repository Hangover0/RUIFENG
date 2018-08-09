<template>
  <div class="navigationBar">
    <Icon v-if="goBack" @click="goBackClick" class="go-btn" type="chevron-left"></Icon>
    <h3 class="title">{{this.$store.state.title}}</h3>
  </div>
</template>


<script>
export default {
  name: 'NavigationBar',
  data(){
    return {

    }
  },
  props: {
    goBack: {
      type: Boolean,
      default: false
    }
  },
  methods:{
    goBackClick(){
      this.$router.go(-1);
    }
  }
}
</script>


<style scoped>
.navigationBar{
  height: 64px;
  background: url("http://img0.imgtn.bdimg.com/it/u=1987426254,2265269802&fm=11&gp=0.jpg") center center;
  background-size: cover;
  position: relative;
}
.title{
  line-height: 64px;
  text-align: center;
  color: #ffffff;
  letter-spacing: 5px;
  font-weight: normal;
}
.go-btn{
  color: #999999;
  font-size: 16px;
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
