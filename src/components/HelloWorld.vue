<template>
  <div class="hello" id="tb">
    <table>
				<tr>
					<td></td>
					<td>name</td>
					<td>sex</td>
					<td>age</td>
					<td>操作</td>
				</tr>
				<tr v-for="item in personList">
					<td>{{item.id}}</td>
					<td>{{item.name}}</td>
					<td>{{item.sex}}</td>
					<td>{{item.age}}</td>
					<td><button @click="delRow(item.id)">删除</button></td>
				</tr>
			</table>

			<h4 style="margin-top:20px;">插入数据</h4>
			<div class="inpBox">
				<input placeholder="姓名" v-model="name" type="text" />
				<input placeholder="性别" v-model="sex" type="text" />
				<input placeholder="年龄" v-model="age" type="text" />
				<div style="margin-top:20px;">
					<button @click="insertPerson">确认</button>
					<button @click="qk">清空</button>
				</div>
			</div>
  </div>
</template>

<script>
import apifuns from "../api";

export default {
  name: "HelloWorld",
  data() {
    return {
      personList: [],
			name: "",
			age: "",
			sex: "",
    };
  },
  methods: {
    qk() {
      this.name = "";
      this.age = "";
      this.sex = "";
      console.log("清空");
      console.log(document.cookie);
    },
    insertPerson() {
      let that = this;
      let data = {};
      data.name = this.name;
      data.age = this.age;
      data.sex = this.sex;
      if (data.name && data.age && data.sex) {
        apifuns.insertPerson(data).then(bcData => {
          if (bcData && bcData.status === true) {
            alert(bcData.info);
            that.getData();
          } else {
            alert(bcData.info);
            console.log(bcData.msg);
          }
        });
      }
    },
    delRow(id) {
      var that = this;
      console.log(id);
      apifuns.delPerson(id).then(bcData => {
        if (bcData && bcData.status === true) {
          alert(bcData.info);
          that.getData();
        } else {
          alert(bcData.info);
          console.log(bcData.msg);
        }
      });
    },
    async getData() {
      this.personList = await apifuns.getData();
      console.log(this.personList);
      document.cookie="name=yhn&&abc=ccc";
      console.log(document.cookie);
    }
  },
  created () {

  },
  mounted: function() {
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #fff !important;
}

#tb {
  width: 100%;
}

#tb table {
  width: 100%;
}

.inpBox input {
  display: block;
  margin-top: 20px;
}
</style>
