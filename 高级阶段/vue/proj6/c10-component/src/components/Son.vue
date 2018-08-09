<template>
  <div>
    儿子 - {{str}} - {{num}}
    <button type="button" @click="sendMsg">BUTTON</button>
  </div>
</template>


<script>
export default {
  name: 'Son',
  data() {
    return {
      msg: "我是子组件数据"
    }
  },
  methods: {
    sendMsg(event) {
      this.$emit('msg', this.msg);
    }
  },
  props: {
    str: {
      type: String
    },
    num: {
      type: Number
    }
  }
}
</script>


<style scoped>

</style>
