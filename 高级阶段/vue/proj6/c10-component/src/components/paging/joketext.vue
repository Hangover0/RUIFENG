<template>
  <div class="content">
    <ul>
        <li v-for="(content, index) in contentlist" :key="index">
          <p>{{content.ct}}</p>
          <p>{{content.title}}</p>
          <img :src="content.img" alt="" width="300">
        </li>
      </ul>
  </div>
</template>


<script>
export default {
  name: 'joketext',
  data() {
    return {
      contentlist: ''
    }
  },
  mounted: {
    get() {
      this.$axios.post('http://route.showapi.com/341-1', {
      showapi_appid: '59896',
      showapi_sign: '90a44ef5b0bc4b8a9515e7a4aced0f30',
      page: '1',
      maxResult: '20'
    })
      // 异常处理机制
      // try...catch
    .then(res => {
      this.contentlist = res["data"]["showapi_res_body"]["contentlist"];
    })
    .catch(error => {
      console.log(error);
    })
    }
  }
}

</script>


<style scoped>
.content{
  background: orange;
}
</style>
