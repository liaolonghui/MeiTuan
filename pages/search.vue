<template>
    <div>
        <h2>Page is search</h2>
        <ul>
            <li v-for="(item,idx) in list" :key="idx">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'search',
    data(){
        return {
            list: []
        }
    },
    async asyncData() {
        let {status, data: {list}} = await axios.get('http://localhost:3000/city/list')
        if(status === 200){
            return {
                list
            }
        }
    },
}
</script>