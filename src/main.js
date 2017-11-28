// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//VUE全局API测试
var Profile = Vue.extend({
  template: '<h1 @click="show">{{place}}</h1>',
  data: function () {
    return {
      place: '深圳',
    }
  },
  methods:{
    show(){
      alert(this.place);
    }
  },
  mounted(){
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#app2')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
