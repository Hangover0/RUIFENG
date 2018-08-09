<template>
  <div class="container">
    <NavigationBar/>
    <div class="content">
      个人
    </div>
    <Tabbar/>
  </div>
</template>


<script>
import Tabbar from '../tabbar'
import NavigationBar from '../navigationBar'
export default {
  name: 'Mine',
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
