import Vue from 'vue';
new Vue({
  el: '#app',
  data: {
    a : 4,
    b : 6,
    firstName: 'Henry',
    lastName: 'Lee',
    fullName: 'Henry Lee',
  },
  // 数据请求和加载
  created() {

  },
  // DOM元素挂载
  mounted() {

  },
  // 方法
  methods: {
    total() {
      return (this.a + this.b).toFixed(2);
    }
  },
  // 计算属性
  computed: {
    sum() {
      return (this.a + this.b).toFixed(2);
    },
    FullName: {
      // setter 设置
      set(val) {
        let names = val.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      },
      // getter 获取
      get() {
        return this.firstName + ' ' + this.lastName;
      },
    },
  },
  // 过滤
  filters: {

  },
  // 侦听
  watch: {
    // val是新值
    firstName(val){
      this.fullName = val + ' ' + this.lastName;
    },
    lastName(val){
      this.fullName = this.firstName + ' ' + val;
    },
  }
})
