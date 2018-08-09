<template>
  <div>
    程序猿
    <slot name="s1"></slot>
    <hr>
    <slot name="s2"></slot>
    <p>{{msg}}</p>
    <button type="button" @click="sendStr">发送数据</button>
  </div>
</template>

<script>
export default {
  name: 'work',
  data() {
    return {
      str: '一起来玩贪玩蓝月吧'
    }
  },
  props:["msg"],
  methods: {
    sendStr(event) {
      this.$emit("send", this.str)
    }
  }
}
</script>


<style scoped>

</style>
