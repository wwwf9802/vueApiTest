<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import './assets/abc.scss'
import mixin from './mixin/index'

export default {
  name: 'app',
  data(){
    return {
      a:1,
      b:3,
      arr:[]
    }
  },
  mounted(){
    this.$set(this,"b",5)
    this.$set(this.arr,0,"下标0");
    this.foo();
  },
  created(){
    console.log('created fromapp');
  },
  methods:{
    foo(){
      console.log(123);
    }
  },
  mixins:[mixin]
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
