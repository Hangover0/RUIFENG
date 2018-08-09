<template>
  <div class="content">
    <img v-lazy="imgObj"/>
  </div>
</template>

<script>
export default {
  name: 'Lazyload',
  data(){
    return {
      imgObj: {
        src: 'http://img2.imgtn.bdimg.com/it/u=1294397178,576132026&fm=27&gp=0.jpg',
        error: require('../assets/error.jpg'),
        loading: require('../assets/load.jpg')
      }
    }
  }
}
</script>


<style scoped>

</style>
