<template>
    <div class="box">
        <ul>
            <ComGame v-for="(item,i) in $store.state.GameList" :key="i" :item="item"></ComGame>
        </ul>
    </div>
</template>
<script>
import {dataAjax} from "@/api/axiosAPI.js"
export default {
    data() {
        return {
           titgame:""
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

        this.titgame =this.$route.params.titgame;
        this.$store.dispatch("GameList",this.titgame)
    },
    destroyed(){
        this.$store.commit("show")
    }
  
}
     
    
</script>
<style scoped>
    .box{
        width: 90%;
        background-color: rgba(135, 141, 146, 0.2);
        margin: 0 auto;
        margin-top: -.8rem;
        padding: .5rem 0;
        border-radius: 10%;
        
    }
</style>