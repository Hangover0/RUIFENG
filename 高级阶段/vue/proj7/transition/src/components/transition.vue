<template>
  <div class="content">
    <p><button type="button" @click="isVisble = !isVisble">点击</button></p>
    <transition name="slide">
      <h1 v-show="isVisble">余生</h1>
    </transition>
    <p><button type="button" @click="isShow = !isShow">点击</button></p>
    <transition name="anim">
      <h1 v-show="isShow">凉生</h1>
    </transition>
    <p><button type="button" @click="flag = !flag">点击</button></p>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated rubberBand"
      leave-active-class="animated rotateOut">
      <h1 v-show="flag" style="display: inline-block">Hello, World!</h1>
    </transition>
    <p>
      <input type="number" step="20" v-model.number="number">
    </p>
    <p>{{animateNumber}}</p>
  </div>
</template>


<script>
export default {
  name: 'TransAnim',
  data(){
    return {
      isVisble: true,
      isShow: true,
      flag: true,
      number: 0,
      tweenedNumber: 0
    }
  },
  computed: {
    animateNumber(){
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch:{
    number(newValue){
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  }
}
</script>


<style scoped>
@keyframes flip {
  from{
    transform: rotateY(0)
  }
  to{
    transform: rotateY(360deg)
  }
}
.anim-leave-active{
  animation: flip .75s linear reverse;
}
.anim-enter-active{
  animation: flip .75s linear;
}
.slide-enter-active,
.slide-leave-active{
  transition: all .5s linear;
}
.slide-leave,
.slide-enter{
  transform: translate(0);
  color: orange;
}
.slide-leave-to,
.slide-enter-to{
  transform: translate(200px);
  color: burlywood;
}
</style>
