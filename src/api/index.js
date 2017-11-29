import axios from 'axios'
import router from '../router/index.js'

//添加响应拦截器
axios.interceptors.response.use(function(response){
    //对响应数据做些事
    if(response.data.code=="0000"){
        router.push('/');
        return {};
    }else{
        return response;
    }
  },function(error){
    //请求错误时做些事
  })


function login(data) {
    return new Promise((resovle, reject) => {
        axios({
            method: "get",
            url: "yhntest/login",
            params:data,
        }).then(function(response) {
            if(response.data){
                resovle(response.data);
            }else{
                reject("登录时间过期");
            }
            
        }).catch(function(error) {
            reject(error)
        })
    });
}



function register(uname,pwd) {
    let data={};
    data.uname=uname;
    data.pwd=pwd;
    return new Promise((resovle, reject) => {
        axios({
            method: "post",
            url: "yhntest/register",
            data:data,
        }).then(function(response) {
            resovle(response.data);
        }).catch(function(error) {
            reject(error)
        })
    });
}

function getData() {
    return new Promise((resovle, reject) => {
        axios({
            method: "get",
            url: "yhntest/findAll",
        }).then(function(response) {
            resovle(response.data);
        }).catch(function(error) {
            reject(error)
        })
    });
}

function insertPerson(data) {
    return new Promise((resovle, reject) => {
        axios({
            method: "post",
            url: "yhntest/insertPerson",
            data: data,
        }).then(function(response) {
            resovle(response.data);
        }).catch(function(error) {
            reject(error)
        })
    });
}

function delPerson(id) {
    let data = {}
    data.id = id;
    return new Promise((resovle, reject) => {
        axios({
            method: "post",
            url: "yhntest/delPerson",
            data: data,
        }).then(function(response) {
            resovle(response.data);
        }).catch(function(error) {
            reject(error)
        })
    });
}

let obj={
    getData,
    insertPerson,
    delPerson,
    login,
    register,
}

console.log(obj);

export default obj