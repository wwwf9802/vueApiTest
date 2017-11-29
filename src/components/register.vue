<template>
  <div class="register">
    <h1>注册</h1>
    <p>账号:<input v-model="uname" placeholder="请输入" type="text"></p>
    <p>密码:<input v-model="pwd" placeholder="请输入" type="text"></p>
    <div>
      <button @click="register">确认</button>
      <button @click="$router.replace('/')">去登录</button>
    </div>
  </div>
</template>

<script>
import apifuns from "../api";

export default {
  name: "register",
  data() {
    return {
      uname:"",
      pwd:"",
    };
  },
  methods: {
    register(){
      let that=this;
      apifuns.register(this.uname,this.pwd).then(bcData=>{
        if(bcData.status===true){
          alert("注册成功，请登录");
          that.$router.replace('/');
        }else{
          alert(bcData.info);
        }
      })
    }
  },
  created () {

  },
  mounted: function() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
