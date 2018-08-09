<template>
  <div>
    父亲
    <Son :str="str" :num="num * 1" @msg="getMsg"/>
  </div>
</template>


<script>
import Son from '../components/Son'
export default {
  name: 'Parent',
  data() {
    return {
      str: '余生',
      num: 10,
    }
  },
  components: {
    Son
  },
  methods:{
    getMsg(data) {
      console.log(data);
    }
  }
}
</script>


<style scoped>

</style>
