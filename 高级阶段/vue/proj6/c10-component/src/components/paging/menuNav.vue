<template>
  <ul class="menu-list">
    <li v-for="(title, index) in menus" :key="index" :data-page="title" @click="clickMenu">
      {{title | uppercase}}
    </li>
  </ul>
</template>


<script>
export default {
  name: 'manuNav',
  data() {
    return {
      menus: ['joketext', 'jokeimg', 'jokegraph']
    }
  },
  methods:{
    clickMenu(e){
      let page = e.target.dataset.page;
      this.$emit('menuClick', page);
    }
  },
  filters: {
      uppercase(val){
        return val.toUpperCase();
      }
  }
}
</script>


<style>
.menu-list {
    list-style: none;
    padding: 0;
}
.menu-list {
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu-list li {
    width: calc(100% / 3);
    height: 100%;
    background: #eeeeee;
    line-height: 35px;
    cursor: pointer;
    color: #000000;
}
</style>
