/*let url = 'http://http://rap2api.taobao.org/app/mock/data/36912'

//let axios = require('axios')

axios.post(url,{
    pageNum: 1,
    pageSize: 10
}).then(res=>{ 
    console.log(res.data.lists)
})*/

let Mock = require('mockjs')
console.log(Mock.mock({
    "number|1-100.2":1
}))