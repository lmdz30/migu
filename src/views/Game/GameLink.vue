<template>
    <div class="divcont">
        <img class="hImage" src="/images/20200515104450316.png" alt="">
        <h2>轻松解压，无聊必备</h2>
        <div class="pmain">
            <p>生活的快节奏，常常会让我们感觉压力重重。这时候游戏就是一片净土了，但是有时候打排位还打的一肚子气，那有没有什么真正的解压游戏呢?</p>
        </div>
        <ul>
          
             <li class="container" v-for="(v,i) in $store.state.GameLink" :key="i" >
                  <ShortCom :item="v" ></ShortCom>
            </li>
        </ul>
       
        <div class="last">
            <p>快来玩这些精选射击游戏吧~秒玩后发表评论，还有机会被运营小姐姐Pick，获得时长奖励哦~</p>
        </div>
    </div>
</template>
<script>
import ShortCom from "@/components/Game/ShortCom.vue"
import {dataAjax} from "@/api/axiosAPI.js"
export default {
    components:{
        ShortCom,
    },
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
        this.$store.dispatch("GameLink")
    },
    destroyed(){
        this.$store.commit("show")
    }
  

}
</script>
<style scoped>
.divcont{
    color: rgb(255, 255, 255);
    background-color: rgb(219, 154, 0);
    margin-top: -1.04rem;
}
    .hImage{
        width: 100%;
        border: none;
        padding: 0;
        font-size: 100%;
        vertical-align: baseline;
       
    }
    h2{
         line-height:.5rem ;
        box-sizing: border-box;
        text-align: justify;
        letter-spacing: .02rem;
        font-size: .18rem;
        text-indent: .2rem;
    }
    .pmain,.last{
        font-size: .15rem;
        line-height: .28rem;
        letter-spacing: .01rem;
        margin: 0 .2rem;
        padding-bottom: .3rem;
    }
   
</style>