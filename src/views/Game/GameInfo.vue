<template>
    <div class="main">
    
        <h3>《{{arrcontent.tit}}》</h3>
        <div class="content">{{arrcontent.content}}</div>
        <video :src="arrcontent.vsrc" controls autoplay loop></video>
        <ComLi :item="arrcontent"></ComLi>
    </div>
</template>
<script>
import {dataAjax} from "@/api/axiosAPI.js"
export default {
    data(){
        return{
            id:"",
            type:"",
            arrcontent:[],
           
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

        this.type =this.$route.params.type;
        this.arrcontent = this.$store.state.GameInfo;
             this.id = this.$route.params.id;
             this.arrcontent.filter(v=>{
                 if(v.id==this.id){
                     this.arrcontent = v
                     console.log(v)
                     return v
                 }
             })
        this.$store.dispatch("GameInfo",this.type)
        // console.log(this.$store.state.GameInfo)
       this.$store.commit("hide")
   },
   destroyed(){
       this.$store.commit("show")
   },
   

}
</script>
<style scoped>
   .main{
       background-color: rgba(97, 181, 252, 0.2);
      padding: .1rem 0;
      margin-top: -1.04rem;
   }
   
    h3{
        line-height: .5rem;
        text-align: center;
        background-color: #ccc;
        width: 2rem;
        margin: .15rem auto ;
        border-radius: 30%;
    }
    video{
       
        width: 100%;
        margin-bottom: .3rem;
    }
    .content{
        width: 90%;
        font-size: .14rem;
        line-height: .24rem;
         background-color: rgba(97, 181, 252, 0.3);
        letter-spacing: .02rem;
        color: #666;
        margin: 0 auto .3rem;
        font-style: italic;
        font-weight: bold;
    }
</style>