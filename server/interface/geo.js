const Router = require('koa-router')
const axios = require('./utils/axios')

let router = new Router({
    prefix: '/geo'
})

const sign = 'a3c9fe0782107295ee9f1709edd15218'

router.get('/getPosition',async (ctx)=>{
    //接口有问题，待解决
    //let {status,data:{province,city}} = await axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
    let status = 200,
    province = '江西',
    city = '南昌'
    if(status===200){
        ctx.body = {
            province,
            city
        }
    }else{
        ctx.body = {
            province: '',
            city: ''
        }
    }
})


module.exports = router