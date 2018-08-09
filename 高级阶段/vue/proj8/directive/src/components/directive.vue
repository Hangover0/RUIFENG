<template>
  <div>
    自定义组件
    <input type="text" v-focus="{color:'red'}">
  </div>
</template>


<script>
export default {
  name: 'Directive',
  // 自定义指令
  directives:{
    // focus -> 指令名称
    focus:{
      // 当被绑定的元素插入到 DOM 中时……
      inserted(el, binding){
        // 获取焦点
        el.focus();
        el.style.outline = 'none';
        el.style.border = `1px solid ${binding.value.color}`;
        el.style.paddingLeft = '5px';
      }
    }
  },
  data(){
    return {

    }
  }
}
</script>


<style>

</style>
