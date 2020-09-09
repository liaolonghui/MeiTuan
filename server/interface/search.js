const Router = require('koa-router')
const axios = require('./utils/axios')
const Poi = require('../dbs/models/poi')

const  router = new Router({
    prefix: '/search'
})

const sign = 'a3c9fe0782107295ee9f1709edd15218'

router.get('/top', async (ctx)=>{
    // let {status,data:{top}} = await axios.get(`http://cp-tools.cn/search/top`,{params:{input:ctx.query.input,city:ctx.query.city,sign}})
    // ctx.body = {
    //     top:status===200?top:[]
    // }
    try {
        let top = await Poi.find({
            'name': new RegExp(ctx.query.input),
            city: ctx.query.city
        })
        ctx.body = {
            code: 0,
            top: top.map(item => {
                return {
                    name: item.name,
                    type: item.type
                }
            }),
            type: top.length ? top[0].type : ''
        }
    } catch (e) {
        ctx.body = {
            code: -1,
            top: []
        }
    }
})

router.get('/hotPlace',async (ctx)=>{
    // let city = city.store?ctx.store.geo.position.city:ctx.query.city
    // let {status,data:{result}} = await axios.get('http://cp-tools.cn/search/hotPlace',{
    //     params:{
    //         sign,
    //         city
    //     }
    // })
    // ctx.body = {
    //     result: status===200?result:[]
    // }
    let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
    try {
        let result = await Poi.find({
            city,
            type: ctx.query.type || '景区'
        }).limit(10)
    
        ctx.body = {
            code: 0,
            result: result.map(item => {
                return {
                    name: item.name,
                    type: item.type
                }
            })
        }
    } catch (e) {
        ctx.body = {
            code: -1,
            result: []
        }
    }
})

//接口有问题待解决
router.get('/resultsByKeywords', async (ctx) => {
    const {city, keyword} = ctx.query;
    let {status, data:{count,pois}} = await axios.get('http://cp-tools.cn/search/resultsByKeywords', {
      params: {
        city,
        keyword,
        sign
      }
    })
    ctx.body = {
      count: status === 200 ? count : 0,
      pois: status === 200 ?
        pois : []
    }
})
  
router.get('/products', async (ctx) => {
    let keyword = ctx.query.keyword || '旅游'
    let city = ctx.query.city || '北京'
    let {status, data:{product,more}} = await axios.get('http://cp-tools.cn/search/products', {
      params: {
        keyword,
        city,
        sign
      }
    })
    if (status === 200) {
      ctx.body = {
        product,
        //判断是否是登录状态
        more: ctx.isAuthenticated() ? more : [],
        login: ctx.isAuthenticated()
      }
    } else {
      ctx.body = {
        product: {},
        more: ctx.isAuthenticated() ? more : [],
        login: ctx.isAuthenticated()
      }
    }
})


module.exports = router