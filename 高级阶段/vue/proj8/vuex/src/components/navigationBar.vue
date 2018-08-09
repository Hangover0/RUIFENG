<template>
  <div class="navigationBar">
    <Icon v-if="goBack" @click="goBackClick" type="chevron-left" class="go-btn"></Icon>
    <h3 class="title">{{this.$store.state.title}}</h3>
  </div>
</template>


<script>
export default {
  name: 'NavigationBar',
  props: {
    goBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBackClick(){
      this.$router.go(-1);
    }
  },
  data(){
    return {
    }
  }
}
</script>


<style scoped>
.navigationBar{
  height: 64px;
  background: #333333;
  color: #ffffff;
  position: relative;
}
.title{
  text-align: center;
  line-height: 64px;
  letter-spacing: 5px;
}
.go-btn{
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
