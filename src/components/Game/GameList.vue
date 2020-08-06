<template>
    <div class="gamelist">
      
        <h3>{{aduiodata.name}}</h3>
        <p>{{aduiodata.introduction}}</p>
        <audio :src="aduiodata.url" controls></audio>
    </div>
</template>
<script>
import {aduio} from "@/api/axiosAPI.js"
export default {
    data(){
        return{
            aduiodata:[]
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
        this.$store.dispatch("aduioact")
         this.aduiodata = this.$store.state.aduio[0]
    }
}
</script>
<style scoped>
    .gamelist{
       height: 10%;
       width: 80%;

        margin:0 .15rem;
        line-height: .32rem;
        text-align: center;
    }
</style>