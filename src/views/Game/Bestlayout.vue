<template>
    <div class="layout">
        <ul>
            <ComLi v-for="(item,i) in $store.state.VaddDown" :key="i" :item="item"></ComLi>
        </ul>
    </div>
</template>
<script>
import {dataAjax} from "@/api/axiosAPI.js"
export default {
    data() {
        return {
           
        }
    },
    created(){
        //在页面加载时读取localStorage里的状态信息
        if (localStorage.getItem("data") ) {
            //replaceState替换数据 Object.assign合并对象
            this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("data"))))
        } 
        //在页面刷新时将vuex里的信息保存到localStorage里
        window.addEventListener("beforeunload",()=>{
            localStorage.setItem("data",JSON.stringify(this.$store.state))
        })
        this.$store.commit("hide")
        this.$store.dispatch("Vdata")
    },
    destroyed(){
        this.$store.commit("show")
    }
  
}
     
    
</script>
<style scoped>
    .layout{
        margin-top: -1.04rem;
    }
</style>