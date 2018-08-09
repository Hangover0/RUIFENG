import Vue from 'vue';
import '../static/css/index.css';
new Vue({
  el: "#app",
  data: {
    radius: '40%',
    bgColor: 'orange',
    class1: 'box',
    class2: 'radius',
    className: 'box',
    isBox: true,
    classObj: {
     'box': true,
     'radius': true
   },
   styleObj: {
     margin: '50px',
     borderRadius: '20px',
     background: 'blue',
     transform: 'rotateZ(-15deg)',
   }
  },
})
