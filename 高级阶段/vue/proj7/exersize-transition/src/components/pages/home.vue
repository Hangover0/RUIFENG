<template>
  <div class="content">
    <p>
      <button type="button" @click="isBtn = !isBtn">点击有惊喜！</button>
    </p>
    <transition name="slide">
      <p v-show="isBtn">像个女汉子一样活着！</p>
    </transition>
    <p>
      <button type="button" @click="isShow = !isShow">点击有惊喜！</button>
    </p>
    <transition name="fade">
      <p v-show="isShow">像个女汉子一样活着！</p>
    </transition>
    <p>
      <button type="button" @click='isVisible = !isVisible'>点击有惊喜！</button>
    </p>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated rubberBand"
      leave-active-class="animated rotateOut">
      <p v-show="isVisible">像个女汉子一样活着！</p>
    </transition>
    <input v-model.number="number" type="number" step="20">
    <p>{{ animatedNumber }}</p>

    <transition name="slideX">
      <button v-if="isEditing" @click="btnClick" key="save">
          Save
      </button>
      <button v-else @click="btnClick" key="edit">
          Edit
      </button>
    </transition>

    <hr>

    <div class="btn-wrap">
      <transition name="slideX" mode="in-out">
          <button :key="isEditing" @click="btnClick">
              {{ isEditing ? 'save' : 'edit'}}
          </button>
      </transition>
    </div>

    <hr>

    <div id="list-demo" class="demo">
      <button @click="add">add</button>
      <button @click="remove">remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" :key="item" class="list-item">
          {{item}}
        </span>
      </transition-group>
    </div>

    <hr>

    <div id="flip-list-demo">
      <button @click="shuffle">shuffle</button>
      <transition-group>
        <li v-for="num in nums" :key="num">
          {{num}}
        </li>
      </transition-group>
    </div>
  </div>
</template>


<script>
export default {
  name: 'home',
  data(){
    return {
      isBtn: true,
      isShow: true,
      isVisible: true,
      tweenedNumber: 0,
      number: 0,
      isEditing: true,
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10,
      nums: [1,2,3,4,5,6,7,8,9]
    }
  },
  computed: {
    animatedNumber(){
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    number(newValue){
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  },
  methods:{
    btnClick(){
      this.isEditing = !this.isEditing;
    },
    randomIndex(){
      return Math.floor(Math.random() * this.items.length);
    },
    add(){
      this.items.push(this.nextNum++);
    },
    remove(){
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle(){
      this.nums = _.shuffle(this.nums);
    }
  }
}
</script>


<style>
.slide-enter-active,
.slide-leave-active{
  transition: all .5s linear;
}
.slide-enter,
.slide-leave-to{
  transform: translateX(100px);
}
.slide-enter-to,
.slide-leave{
  transform: translateX(0px);
}
@keyframes fade {
  from{
    transform: scale(1)
  }
  to{
    transform: scaleX(1.5)
  }
}
.fade-enter-active,
.fade-leave-active{
  animation: fade .5s linear;
}

.btn-wrap {
    position: relative;
}
.btn-wrap > button {
    position: absolute;
}

.slideX-enter-active,
.slideX-leave-active {
    transition: all .5s linear;
}
.slideX-enter {
    opacity: 0;
    transform: translateX(100px);
}
.slideX-leave-active {
    opacity: 0;
    transform: translateX(-100px)
}
.demo{
  margin: 30px auto;
}
.list-item{
  display: inline-table;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active{
  transition: all 1s;
}
.list-enter,
.list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.flip-list-move{
  transition: transform 1s;
}
</style>
