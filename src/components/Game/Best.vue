<template>
    <div class="best">
        <p class="title">{{titlea}}</p>
        <a class="more" @click="more()">更多<span>&gt;</span></a>
        <ul>
            <ComLi v-for="(item,i) in bestarra" :key="i" :item="item"></ComLi>
        </ul>
    </div>
</template>
<script>
import {dataAjax} from "@/api/axiosAPI.js"
export default {
    components:{
        
    },
    props:["bestarra","titlea"],
   
    data(){
        return {
            
        }
    },
    methods:{
        more(){
            this.$router.push('/Bestlayout')
        }
    },
}
</script>
<style scoped>
    .best{
        width: 100%;
        position: relative;
        
    }
    .title{
        color: #333;
        font-size: .16rem;
        line-height: .6rem;
        padding: 0 .2rem;
    }
     .more{
        position: absolute;
        right: .2rem;
        top: 50%;
        margin-top: -1.55rem;
        padding: 0 .15rem;
        height: .2rem;
        line-height: .2rem;
        text-align: center;
        font-size: .12rem;
        color: #999;
        
       
    }
    span{
        display: inline-block;
        width: .15rem;
        height: .15rem;
        line-height: .15rem;
         background-color: #bebebe;
         border-radius: 50%;
         margin-left: .06rem;
        color: #fff;
    }
</style>