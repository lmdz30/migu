<template>
    <div>
        <div class="container">
               <img class="big" :src="item.banimag">
                </div>
                <h2>{{item.title}}</h2>
                <p class="shortinfo">{{item.content}}</p>
                <div class="immediate">
                    <img class="small" :src="item.imgsrc" >
                    <p class="title">{{item.title}}</p>
                    <p class="con">{{item.subtit}}</p>
                    <a class="detail" @click="immediate()">秒玩</a>
                </div>
    </div>
</template>
<script>
import {dataAjax} from "@/api/axiosAPI.js"
export default {
    props:["item"],
    methods:{
        immediate(){
            // console.log(this.arr)
            this.$router.push("/GameInfo")
        }
    }
}
</script>
<style scoped>
    .container{
        width: 100%;
        overflow: hidden;
    }
    .big{
        display: block;
        width: 90%;
        margin: .2rem auto;
        height: 2rem;
        border-radius: .1rem;
    }
   
    h2{
         line-height:.45rem ;
        box-sizing: border-box;
        text-align: justify;
        letter-spacing: .02rem;
        font-size: .18rem;
        text-indent: .2rem;
    }
    .shortinfo{
        font-size: .15rem;
        line-height: .28rem;
        letter-spacing: .01rem;
        margin:0 .2rem .3rem;    
    }
    .immediate{
        
        min-height: 1rem;
        box-sizing: border-box;
        padding: .1rem .8rem 0 1rem;
        position: relative;  
    }
    .small{
        position: absolute;
        top: 0;
        left: .15rem;
        width: .8rem;
        height: .8rem;
        border-radius: .15rem;
        display: block;
       
    }
    .title{
        font-size: .14rem;
        line-height: .2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .con{
        margin-top: .08rem;
        font-size: .12rem;
        line-height: .14rem;
        height: .36rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        width: 100%;
        text-indent: .1rem;
        
    }
    .detail{
        position: absolute;
        right: .15rem;
        top: 50%;
        margin-top: -.2rem;
        width: .7rem;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
        border:none;
        border-radius: .05rem;
        font-size: .14rem;
        color: #999;
        outline: 0;
        background-color: #fff;
        color: rgb(219 154 0);
    }

</style>