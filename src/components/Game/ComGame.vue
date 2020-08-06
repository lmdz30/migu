<template>
    <div>
       
        <li>
            <div class="face">
                <span class="num">{{item.num}}</span>
                <img :src="item.img" >
            </div>
            <p class="name">{{item.name}}</p>
            <p class="type">{{item.type}}</p>
            <a class="imt"  @click="imt(item.num,item.Gtype)">秒玩</a>
        </li>
        
    </div>
</template>
<script>
import {dataAjax} from "@/api/axiosAPI.js"
export default {
    props:["item"],
    methods:{
        imt(num,GType){
            this.$router.push(`/Play/${num}/${GType}`) 
        }
    },
}
</script>
<style scoped>
    
    ul{
        margin-top: .08rem;
    }
    li{
 
        min-height: .8rem;
        box-sizing: border-box;
        padding: .05rem 0 .05rem .1rem;
        position: relative;
        border-bottom: 1px solid #e9e9e9;
        
    }
    .face{
        top: .16rem;
        overflow: visible;
        position: absolute;
        border-radius: .08rem;
    }
    .num{
        display: block;
        height: .2rem;
        width: .2rem;
        border-radius: 50%;
        background-color: #abcdef;
        font-size: .14rem;
        text-align: center;
        position: absolute;
        left: 0;
        top: .2rem;
       
    }
    img{
        position: absolute;
        top: 0;
        left: .25rem;
        width: .6rem;
        height: .6rem;
        border-radius: .15rem;
        display: block;
       
    }
    
    .name{
        font-size: .14rem;
        color: #333;
        line-height: .18rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: .1rem 1rem;
    }
    .type{
    
        font-size: .13rem;
        color: #999;
        line-height: .14rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        width: 100%;
        padding:0 1rem;
        
    }
    .imt{
        position: absolute;
        right: .15rem;
        top: 50%;
        margin-top: -.2rem;
        width: .6rem;
        height: .2rem;
        line-height: .2rem;
        text-align: center;
        background-color:#1f89f6 ;
        border-radius: .05rem;
        font-size: .12rem;
        color: #fff;
        outline: 0;
    }
</style>