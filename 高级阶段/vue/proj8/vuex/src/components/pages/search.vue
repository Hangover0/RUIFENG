<template>
  <div class="container">
    <NavigationBar/>
    <div class="content">
      搜索
    </div>
    <Tabbar/>
  </div>
</template>


<script>
import Tabbar from '../tabbar'
import NavigationBar from '../navigationBar'
export default {
  name: 'Search',
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
