<template>
    <div>
       
        <li>
            <img :src="item.src" >
            <p class="title">{{item.tit}}</p>
            <p class="content">{{item.content}}</p>
            <a class="detail" @click="detail(item.id,item.type)">详情</a>
        </li>
        
    </div>
</template>
<script>
import {dataAjax} from "@/api/axiosAPI.js"
export default {
    props:["item"],
    methods:{
        detail(num,type){
            this.$router.push(`/GameInfo/${num}/${type}`) 
        }
    },
}
</script>
<style scoped>
    
    ul{
        margin-top: .08rem;
    }
    li{
 
        min-height: 1rem;
        box-sizing: border-box;
        padding: .1rem .8rem 0 .95rem;
        position: relative;
        
    }
    img{
        position: absolute;
        top: 0;
        left: .08rem;
        width: .7rem;
        height: .7rem;
        border-radius: .15rem;
        display: block;
       
    }
    .title{
        font-size: .14rem;
        color: #333;
        line-height: .18rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .content{
        margin-top: .08rem;
        font-size: .13rem;
        color: #999;
        line-height: .18rem;
        height: .36rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        width: 100%;
        
    }
    .detail{
        position: absolute;
        right: .15rem;
        top: 50%;
        margin-top: -.2rem;
        width: .6rem;
        height: .2rem;
        line-height: .2rem;
        text-align: center;
        border: 1px solid #1f89f6;
        border-radius: .05rem;
        font-size: .12rem;
        color: #1f89f6;
        outline: 0;
    }
</style>