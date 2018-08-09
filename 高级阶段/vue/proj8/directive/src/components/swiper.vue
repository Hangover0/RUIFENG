<template>
  <div class="content">
   <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
      <swiper-slide><img src="../assets/1.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/1.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/1.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/1.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/1.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/1.png" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/1.png" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'swiper',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          // ...
          loop: true,
          pagination: ".swiper-pagination",
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, true)
    }
  }
</script>


<style scoped>
img{
  margin: 0 auto;
  width: 70%;
  height: 500px;
}
</style>
