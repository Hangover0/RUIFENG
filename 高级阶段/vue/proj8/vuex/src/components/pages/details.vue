<template>
  <div class="container">
    <NavigationBar :goBack="true"/>
    <div class="content">
      {{val}}
    </div>
    <Tabbar/>
  </div>
</template>


<script>
import Tabbar from '../tabbar'
import NavigationBar from '../navigationBar'
export default {
  name: 'Details',
  data(){
    return {
      val: this.$route.params.msg
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
