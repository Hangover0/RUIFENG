<template>
  <div>
    大佬
    <work msg="嗨喽" @send="getStr">
      <p slot="s1">我系渣渣灰</p>
      <p slot="s2">我系古天乐</p>
    </work>
    <p>{{str}}</p>
  </div>
</template>

<script>
import work from '../components/work'
export default {
  name: 'boss',
  data() {
    return {
      str: ''
    }
  },
  methods: {
    getStr(data) {
      this.str = data;
    }
  },
  components: {
    work
  }
}
</script>


<style scoped>

</style>
