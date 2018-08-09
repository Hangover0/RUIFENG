<template>
  <div>
    <ul class="menu-list">
      <li v-for="(link, index) in links" :key="index" >
        <router-link exact :to="link.url">
          {{link.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'Navlist',
  data(){
    return {
      links: [
        {
         title: '自定义指令',
         url: '/'
        },
        {
          title: 'Ui',
          url: '/ui',
        },
        {
          title: 'Swiper',
          url: '/swiper',
        },
        {
          title: 'Lazyload',
          url: '/lazyload'
        },
        {
          title: 'Echarts',
          url: '/echarts',
        },
        {
          title: 'Iview',
          url: '/iview'
        },
      ]
    }
  }
}
</script>
