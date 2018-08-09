<template>
    <div class="home-ct">
    
        主页内容01
    
        <button type="button" @click="goAbout">cd</button>
    
    </div>
</template>

<script>
    export default {
    
        name: 'Home1',
    
        data() {
    
            return {
    
    
    
            }
    
        },
    
        methods: {
    
            goAbout() {
    
                this.$router.push({
    
                    path: '/guanyu',
    
                    query: {
    
                        weather: 'cd'
    
                    }
    
                })
    
            }
    
        }
    
    }
</script>
<style scoped>
    
</style>
