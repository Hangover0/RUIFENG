<template>
  <div class="counter-box">
    <span class="couter-btn reduce" @click="reduce">-</span>
    <input type="text" class="couter-input" v-model="value">
    <span class="couter-btn increase" @click="increase">+</span>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    data() {
      return {
        value: 1,
      }
    },
    methods: {
      reduce() {
        if (this.value > 1) {
          this.value--;
        }
      },
      increase() {
        if (this.value < this.stock) {
          this.value++;
        }
      }
    },
    props: {
      stock: {
        type: Number,
        require: true
      }
    },
    watch: {
      value(newVal) {
        // 验证
        if ((newVal != '' && /^[-0]/.test(newVal)) || /\D/.test(newVal)) {
          this.value = 1;
        } else if (newVal != '' && newVal > this.stock) {
          this.value = this.stock;
        }
        this.$emit('numchange', this.value);
      }
    }
  }
</script>


<style scoped>
  .counter-box {
    width: 200px;
    height: 35px;
    border: 1px solid black;
  }

  .couter-btn,
  .couter-input {
    height: 100%;
    box-sizing: border-box;
    float: left;
  }

  .couter-btn {
    display: inline-block;
    width: 20%;
    background: aqua;
    text-align: center;
    line-height: 35px
  }

  .couter-input {
    width: 60%;
    margin: 0;
    padding: 0;
    text-align: center;
    outline: none;
    border: none;
  }
</style>
