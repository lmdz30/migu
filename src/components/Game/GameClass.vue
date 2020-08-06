<template>
    <div class="game">
        <h3 class="title">{{gametitarr}}</h3>
        <ul>
            <ComGame v-for="(v,i) in gamearr" :key="i" :item="v"></ComGame>
        </ul>
      
          <div class="lookmore">
            <span @click="moregame(gametitarr)">查看更多>>></span>
          </div>
    

    </div>
</template>
<script>
import {dataAjax} from "@/api/axiosAPI.js"
export default {
    props:["gamearr","gametitarr"],
   
    data(){
        return {
            
        }
    },
    methods:{
        moregame(titgame){
            this.$router.push(`/Hotlayout/${titgame}`)
        }
    },
}
</script>
<style scoped>
    .game{
        width: 90%;
        position: relative;
        background-color: #f2f2f2;
        margin:.3rem .15rem;
        padding-top: .1rem;
    }
    .title{
        background-color: #1f89f6;
        color: #fff;
        font-size: .14rem;
        line-height: .28rem;
        padding: 0 .2rem;
        width: 20%;
        text-align: center;
        position: absolute;
        top: -.1rem;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10%;
    }
    
    .lookmore{
       text-align: center;
        height: .5rem;
        line-height: .5rem;
        width: 90%;
        font-size: .12rem;
        color: #bbb;
       
        margin: 0 auto;
    }
    .lookmore:active{
         cursor: pointer;
    }
      
</style>