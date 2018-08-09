<template>
   <div class="container">
    <NavigationBar/>
    <div class="content">
      购物车
    </div>
    <Tabbar/>
  </div>
</template>


<script>
import Tabbar from '../tabbar'
import NavigationBar from '../navigationBar'
export default {
  name: 'Shopcar',
  data(){
    return {

    }
  },
  components:{
    Tabbar,
    NavigationBar
  },
}
</script>


<style scoped>

</style>
