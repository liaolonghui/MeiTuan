<template>
    <div class="slide">
        <el-carousel height="240px">
            <el-carousel-item v-for="item in list" :key="item.img">
                <img :src="item.img" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list: [{
                url: '#abc',
                img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg'
            },{
                url: '#bsbsb',
                img: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
            },{
                url: '#sjfkajfj',
                img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg'
            },{
                url: '#hgfdas',
                img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
            },{
                url: '#kjljj',
                img: 'http://p1.meituan.net/codeman/bb0abb3435a60c44d87e90ed4237b61039329.jpg'
            }]
        }
    }
}
</script>