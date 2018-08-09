<template>
  <div class="content">
    <!-- 示例1 -->
    <p><button type="button" @click="isVisble = !isVisble">点击</button></p>
    <transition name="slide">
      <h1 v-show="isVisble">余生</h1>
    </transition>
    <!-- 示例2 -->
    <p><button type="button" @click="isShow = !isShow">点击</button></p>
    <transition name="anim">
      <h1 v-show="isShow">凉生</h1>
    </transition>
    <!-- 示例3 -->
    <p><button type="button" @click="flag = !flag">点击</button></p>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated rubberBand"
      leave-active-class="animated rotateOut">
      <h1 v-show="flag" style="display: inline-block">Hello, World!</h1>
    </transition>
    <!-- 示例4 -->
    <p>
      <input type="number" step="20" v-model.number="number">
    </p>
    <p>{{animateNumber}}</p>
    <!-- 示例5 -->
    <transition name="btnfade" mode="in-out">
      <button v-if="isEditing" key="save" @click="btnClick">
        Save
      </button>
      <button v-else key="edit" @click="btnClick">
        Edit
      </button>
    </transition>
    <hr>
    <div class="btn-wrap">
      <transition name="btnfade" mode="out-in">
        <button v-bind:key="isEditing" @click="btnClick">
          {{ isEditing ? 'Save' : 'Edit' }}
        </button>
      </transition>
    </div>
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
      tweenedNumber: 0,
      isEditing: true
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
  },
  methods:{
    btnClick(){
      this.isEditing = !this.isEditing;
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
.btnfade-enter-active,
.btnfade-leave-active{
  transition: all .5s linear;
}
.btnfade-enter,
.btnfade-leave-to{
  opacity: 0;
  transform: translateX(0)
}
.btnfade-leave,
.btnfade-enter-to{
  opacity: 1;
  transform: translateX(-30px)
}
.btn-wrap{
  width: 50px;
  margin: 0 auto;
  position: relative;
}
.btn-wrap > button{
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
