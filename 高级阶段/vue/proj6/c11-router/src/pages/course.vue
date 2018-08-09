<template>
    <div class="content">
        <ul class="l-menu">
            <li><router-link :to="links.html">HTML</router-link></li>
            <li><router-link :to="links.css">CSS</router-link></li>
            <li><router-link :to="links.js">JS</router-link></li>
        </ul>
        <router-view />
    </div>
</template>

<script>
    export default {
    
        name: 'Course',
    
        data() {
    
            return {
                links:{
                    html: '/course/html',
                    css: '/course/css',
                    js: '/course/js'
                }
    
    
            }
    
        }
    
    }
</script>
<style scoped>
.content{
    width: 400px;
    background: pink;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
    .l-menu{
        height: 100%;
        width: 10%;
        background: aqua
    }
    .r-content{
        width: 80%;
    }
</style>
