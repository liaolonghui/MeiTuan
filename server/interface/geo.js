const Router = require('koa-router')
const axios = require('./utils/axios')
const { listenerCount } = require('koa')
const City = require('../dbs/models/city')
const Province = require('../dbs/models/province')
const Menu = require('../dbs/models/menus')

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

router.get('/province', async (ctx)=>{
    let province = await Province.find()
    ctx.body = {
        province: province.map(item=>{
            return {
                id: item.id,
                name: item.value[0]
            }
        })
    }
    //接口有问题
    // let {status,data:{province}} = await axios.get(`http://cp-tools.cn/geo/province?sign=${sign}`)
    // ctx.body = {
    //     province: status===200?province:[]
    // }
})

router.get('/province/:id', async (ctx)=>{
    let city = await City.findOne({id: ctx.params.id})
    ctx.body = {
        code: 0,
        city: city.value.map(item=>{
            return {province: item.province, id: item.id, name: item.name}
        })
    }
    //接口有问题，所以不用
})

router.get('/city', async (ctx)=>{
    let city = []
    let result = await City.find()
    result.forEach(item => {
        city = city.concat(item.value)
    })
    ctx.body = {
        code: 0,
        city: city.map(item => {
            return {
                province: item.province,
                id: item.id,
                name: item.name === '市辖区' || item.name === '省直辖县级行政区'
                    ? item.province
                    : item.name
            }
        })
    }
    //接口有问题，所以不用
})

router.get('/hotCity', async (ctx) => {
    let list = [
        '北京市',
        '上海市',
        '广州市',
        '深圳市',
        '天津市',
        '西安市',
        '杭州市',
        '南京市',
        '武汉市',
        '成都市'
    ]
    let result = await City.find()
    let nList = []
    result.forEach(item => {
        nList = nList.concat(item.value.filter(k => list.includes(k.name) || list.includes(k.province)))
    })
    ctx.body = {
        hots: nList
    }
    //接口有问题，所以不用
})

router.get('/menu', async (ctx) => {
    const result = await Menu.findOne()
    ctx.body = {
        menu: result.menu
    }
    //接口有问题 改为使用本地数据库
    // let {status, data:{menu}} = await axios.get(`http://cp-tools.cn/geo/menu?sign=${sign}`)
    // if(status==200){
    //     ctx.body = {
    //         menu
    //     }
    // }else{
    //     ctx.body = {
    //         menu: []
    //     }
    // }
})


module.exports = router