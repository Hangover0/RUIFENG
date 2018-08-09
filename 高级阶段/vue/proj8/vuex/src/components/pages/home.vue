<template>
  <div class="container">
    <NavigationBar />
    <div class="content">
      <Input class="input" v-model="val" placeholder="Enter something..." clearable style="width: 200px" />
      <Button @click="goDetails">前往详情页</Button>
      <router-view/>
    </div>
    <Tabbar/>
  </div>
</template>


<script>
import Tabbar from '../tabbar'
import NavigationBar from '../navigationBar'
export default {
  name: 'Home',
  data(){
    return {
      val: '空欢喜'
    }
  },
  methods: {
    goDetails(){
      this.$router.push({
        name: 'Details',
        params: {msg: this.val}
      });
    }
  },
  components:{
    Tabbar,
    NavigationBar
  },
}
</script>


<style scoped>
.content{
  text-align: center;
}
.input{
  display: block;
  margin: 25px auto;
}
</style>
