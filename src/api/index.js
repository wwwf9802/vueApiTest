import axios from 'axios'

function getData() {
    return new Promise((resovle, reject) => {
        axios({
            method: "post",
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
}

console.log(obj);

export default obj