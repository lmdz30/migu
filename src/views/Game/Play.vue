<template>
    <div class="pmian">
    
        <h3>《{{playcontent.name}}》</h3>
        <div class="gtype">{{playcontent.type}}</div>
        <video :src="playcontent.vsrc" controls autoplay loop></video>
        <ComGame :item="playcontent"></ComGame>
    </div>
</template>
<script>
import {dataAjax} from "@/api/axiosAPI.js"
export default {
    data(){
        return{
            num:"",
            playtype:"",
            playcontent:[],
           
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
        this.playtype =this.$route.params.type;
        this.playcontent = this.$store.state.Play;
             this.num = this.$route.params.num;
             this.playcontent.filter(v=>{
                 if(v.num==this.num){
                     this.playcontent = v
                     console.log(v)
                     return v
                 }
             })
        this.$store.dispatch("Play",this.playtype)
       this.$store.commit("hide")
   },
   destroyed(){
       this.$store.commit("show")
   },
   

}
</script>
<style scoped>
   .pmian{
       background-color: rgba(76, 42, 40, .2);
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
    .gtype{
        width: 90%;
        font-size: .14rem;
        line-height: .24rem;
         background-color: rgba(110, 181, 252, 0.3);
        letter-spacing: .02rem;
        color: #666;
        margin: 0 auto .3rem;
        font-style: italic;
        font-weight: bold;
        text-align: center;
    }
</style>