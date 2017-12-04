<template>
  <div class="login">
    <h1>登录</h1>
    <p>账号:<input v-model="uname" placeholder="请输入" type="text"></p>
    <p>密码:<input v-model="pwd" placeholder="请输入" type="text"></p>
    <div>
      <button @click="login">登录</button>
      <button @click="goRegister">注册</button>
    </div>
  </div>
</template>

<script>
import apifuns from "../api";
import axios from "axios";

// function getsongList() {
//   let data={
//     listId:"list1"
//   }
//   axios({
//     method: "post",
//     url: "yhntest/getplaylistsongs",
//     data: data
//   })
//     .then(function(response) {
//       console.log(response.data);
//     })
//     .catch(function(error) {
//     });
// }

export default {
  name: "login",
  data() {
    return {
      uname: "",
      pwd: ""
    };
  },
  methods: {
    login() {
      let data = {};
      data.uname = this.uname;
      data.pwd = this.pwd;
      apifuns.login(data).then(bcData => {
        console.log(bcData);
        if (bcData.status === true) {
          alert(bcData.info);
          this.$router.replace("/home");
        }
      });
    },
    goRegister() {
      this.$router.push("/register");
    }
  },
  async created() {
    let data={
    listId:"list2"
  }
 let obj=await axios({
    method: "post",
    url: "yhntest/getplaylistsongs",
    data: data
  })
    .then(function(response) {
      console.log(response.data);
      return response.data
    })
    .catch(function(error) {
    });

  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
