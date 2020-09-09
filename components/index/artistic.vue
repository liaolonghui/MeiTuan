<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="item in cur"
        :key="item.title">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.img"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      kind: 'all',
      list: {
        all: [
          {
            title: "来点烤肉（世茂广场店）",
            img:
              "//p0.meituan.net/msmerchant/e0f687f4444bb9492e57d096ef235cf3106632.jpg@460w_260h_1e_1c",
            pos: "来点烤肉双人餐，提供免费WiFi",
            price: "118"
          },
          {
            title: "小飛甲",
            img:
              "//p0.meituan.net/msmerchant/4982493fe0dd39045f8823555012f387185973.png@460w_260h_1e_1c",
            pos: "3-4人餐，提供免费WiFi",
            price: "219"
          },

          {
            title: "南昌绿地华邑酒店",
            img:
              "//p1.meituan.net/tdchotel/678acaeb6775a6b2b774c1465baa1afe1822568.jpg@460w_260h_1e_1c",
            pos: "新客超值优惠、酒店套餐、发票推荐",
            price: "941"
          },          {
            title: "来点烤肉（世茂广场店）",
            img:
              "//p0.meituan.net/msmerchant/e0f687f4444bb9492e57d096ef235cf3106632.jpg@460w_260h_1e_1c",
            pos: "来点烤肉双人餐，提供免费WiFi",
            price: "118"
          },

          {
            title: "南昌绿地华邑酒店",
            img:
              "//p1.meituan.net/tdchotel/678acaeb6775a6b2b774c1465baa1afe1822568.jpg@460w_260h_1e_1c",
            pos: "新客超值优惠、酒店套餐、发票推荐",
            price: "941"
          },
          {
            title: "小飛甲",
            img:
              "//p0.meituan.net/msmerchant/4982493fe0dd39045f8823555012f387185973.png@460w_260h_1e_1c",
            pos: "3-4人餐，提供免费WiFi",
            price: "219"
          },
        ],
        part: [
          {
            title: "来点烤肉（世茂广场店）",
            img:
              "//p0.meituan.net/msmerchant/e0f687f4444bb9492e57d096ef235cf3106632.jpg@460w_260h_1e_1c",
            pos: "来点烤肉双人餐，提供免费WiFi",
            price: "118"
          },

          {
            title: "南昌绿地华邑酒店",
            img:
              "//p1.meituan.net/tdchotel/678acaeb6775a6b2b774c1465baa1afe1822568.jpg@460w_260h_1e_1c",
            pos: "新客超值优惠、酒店套餐、发票推荐",
            price: "941"
          },
          {
            title: "小飛甲",
            img:
              "//p0.meituan.net/msmerchant/4982493fe0dd39045f8823555012f387185973.png@460w_260h_1e_1c",
            pos: "3-4人餐，提供免费WiFi",
            price: "219"
          },          {
            title: "来点烤肉（世茂广场店）",
            img:
              "//p0.meituan.net/msmerchant/e0f687f4444bb9492e57d096ef235cf3106632.jpg@460w_260h_1e_1c",
            pos: "来点烤肉双人餐，提供免费WiFi",
            price: "118"
          },

          {
            title: "南昌绿地华邑酒店",
            img:
              "//p1.meituan.net/tdchotel/678acaeb6775a6b2b774c1465baa1afe1822568.jpg@460w_260h_1e_1c",
            pos: "新客超值优惠、酒店套餐、发票推荐",
            price: "941"
          },
          {
            title: "小飛甲",
            img:
              "//p0.meituan.net/msmerchant/4982493fe0dd39045f8823555012f387185973.png@460w_260h_1e_1c",
            pos: "3-4人餐，提供免费WiFi",
            price: "219"
          },
        ],
        spa: [
          {
            title: "小飛甲",
            img:
              "//p0.meituan.net/msmerchant/4982493fe0dd39045f8823555012f387185973.png@460w_260h_1e_1c",
            pos: "3-4人餐，提供免费WiFi",
            price: "219"
          },

          {
            title: "南昌绿地华邑酒店",
            img:
              "//p1.meituan.net/tdchotel/678acaeb6775a6b2b774c1465baa1afe1822568.jpg@460w_260h_1e_1c",
            pos: "新客超值优惠、酒店套餐、发票推荐",
            price: "941"
          },
          {
            title: "来点烤肉（世茂广场店）",
            img:
              "//p0.meituan.net/msmerchant/e0f687f4444bb9492e57d096ef235cf3106632.jpg@460w_260h_1e_1c",
            pos: "来点烤肉双人餐，提供免费WiFi",
            price: "118"
          },          {
            title: "来点烤肉（世茂广场店）",
            img:
              "//p0.meituan.net/msmerchant/e0f687f4444bb9492e57d096ef235cf3106632.jpg@460w_260h_1e_1c",
            pos: "来点烤肉双人餐，提供免费WiFi",
            price: "118"
          },

          {
            title: "南昌绿地华邑酒店",
            img:
              "//p1.meituan.net/tdchotel/678acaeb6775a6b2b774c1465baa1afe1822568.jpg@460w_260h_1e_1c",
            pos: "新客超值优惠、酒店套餐、发票推荐",
            price: "941"
          },
          {
            title: "小飛甲",
            img:
              "//p0.meituan.net/msmerchant/4982493fe0dd39045f8823555012f387185973.png@460w_260h_1e_1c",
            pos: "3-4人餐，提供免费WiFi",
            price: "219"
          },
        ],
        movie: [
          {
            title: "南昌绿地华邑酒店",
            img:
              "//p1.meituan.net/tdchotel/678acaeb6775a6b2b774c1465baa1afe1822568.jpg@460w_260h_1e_1c",
            pos: "新客超值优惠、酒店套餐、发票推荐",
            price: "941"
          },
          {
            title: "小飛甲",
            img:
              "//p0.meituan.net/msmerchant/4982493fe0dd39045f8823555012f387185973.png@460w_260h_1e_1c",
            pos: "3-4人餐，提供免费WiFi",
            price: "219"
          },
                    {
            title: "来点烤肉（世茂广场店）",
            img:
              "//p0.meituan.net/msmerchant/e0f687f4444bb9492e57d096ef235cf3106632.jpg@460w_260h_1e_1c",
            pos: "来点烤肉双人餐，提供免费WiFi",
            price: "118"
          },          {
            title: "来点烤肉（世茂广场店）",
            img:
              "//p0.meituan.net/msmerchant/e0f687f4444bb9492e57d096ef235cf3106632.jpg@460w_260h_1e_1c",
            pos: "来点烤肉双人餐，提供免费WiFi",
            price: "118"
          },

          {
            title: "南昌绿地华邑酒店",
            img:
              "//p1.meituan.net/tdchotel/678acaeb6775a6b2b774c1465baa1afe1822568.jpg@460w_260h_1e_1c",
            pos: "新客超值优惠、酒店套餐、发票推荐",
            price: "941"
          },
          {
            title: "小飛甲",
            img:
              "//p0.meituan.net/msmerchant/4982493fe0dd39045f8823555012f387185973.png@460w_260h_1e_1c",
            pos: "3-4人餐，提供免费WiFi",
            price: "219"
          },

        ],
        travel: [
          {
            title: "来点烤肉（世茂广场店）",
            img:
              "//p0.meituan.net/msmerchant/e0f687f4444bb9492e57d096ef235cf3106632.jpg@460w_260h_1e_1c",
            pos: "来点烤肉双人餐，提供免费WiFi",
            price: "118"
          },

          {
            title: "南昌绿地华邑酒店",
            img:
              "//p1.meituan.net/tdchotel/678acaeb6775a6b2b774c1465baa1afe1822568.jpg@460w_260h_1e_1c",
            pos: "新客超值优惠、酒店套餐、发票推荐",
            price: "941"
          },
          {
            title: "小飛甲",
            img:
              "//p0.meituan.net/msmerchant/4982493fe0dd39045f8823555012f387185973.png@460w_260h_1e_1c",
            pos: "3-4人餐，提供免费WiFi",
            price: "219"
          },          {
            title: "来点烤肉（世茂广场店）",
            img:
              "//p0.meituan.net/msmerchant/e0f687f4444bb9492e57d096ef235cf3106632.jpg@460w_260h_1e_1c",
            pos: "来点烤肉双人餐，提供免费WiFi",
            price: "118"
          },

          {
            title: "南昌绿地华邑酒店",
            img:
              "//p1.meituan.net/tdchotel/678acaeb6775a6b2b774c1465baa1afe1822568.jpg@460w_260h_1e_1c",
            pos: "新客超值优惠、酒店套餐、发票推荐",
            price: "941"
          },
          {
            title: "小飛甲",
            img:
              "//p0.meituan.net/msmerchant/4982493fe0dd39045f8823555012f387185973.png@460w_260h_1e_1c",
            pos: "3-4人餐，提供免费WiFi",
            price: "219"
          },
        ]
      }
    }
  },
  computed: {
    cur: function () {
      return this.list[this.kind]
    }
  },
  async mounted(){
    //接口有问题待解决
    // let {status, data:{count, pois}} = await this.$axios.get('/search/resultsByKeywords', {
    //   params: {
    //     keyword: '景点',
    //     city: this.$store.state.geo.position.city
    //   }
    // })
    // if(status === 200 && count > 0) {
    //   let r = pois.filter((item)=>item.photos.length).map((item, index)=>{
    //     return {
    //       title: item.name,
    //       pos: item.type.split(';')[0],
    //       price: item.biz_ext.cost || '暂无',
    //       img: item.photos[0].url,
    //       url: '//abc.com'
    //     }
    //   })
    //   this.list[this.kind]=r.slice(0,9);
    // }
    // else
    // {
    //   this.list[this.kind]= [];
    // }
  },
  methods: {
    over: async function(e) {
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      let self = this
      if (tag === 'dd') {
        this.kind = dom.getAttribute('kind')
        // let keyword = dom.getAttribute('keyword')
        // let {status, data:{count, pois}} = await self.$axios.get('/search/resultsByKeywords', {
        //   params: {
        //     keyword,
        //     city: this.$store.state.geo.position.city
        //   }
        // })
        // if(status === 200 && count > 0) {
        //   let r = pois.filter((item)=>item.photos.length).map((item, index)=>{
        //     return {
        //       title: item.name,
        //       pos: item.type.split(';')[0],
        //       price: item.biz_ext.cost || '暂无',
        //       img: item.photos[0].url,
        //       url: '//abc.com'
        //     }
        //   })
        //   this.list[this.kind]=r.slice(0,9);
        // }
        // else
        // {
        //   this.list[this.kind]= [];
        // }
      }
    }
  },
}
</script>
<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>