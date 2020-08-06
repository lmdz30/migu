<template>
    <div class="download">
        <img :src="Downloaddata.Dimg" alt="游戏">
        <h3>{{Downloaddata.Dtit}}</h3>
        <p>{{Downloaddata.Dcont}}</p>
        
      <button @click="fun()">立即下载</button>
     
      <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            "Downloaddata":[]
        }
    },
    methods:{
        fun(){
            this.$router.push('/VDownload')
        }
    },
    created() {
        //在页面加载时读取localStorage里的状态信息
        if (localStorage.getItem("data") ) {
            //replaceState替换数据 Object.assign合并对象
            this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(localStorage.getItem("data"))))
        } 
        //在页面刷新时将vuex里的信息保存到localStorage里
        window.addEventListener("beforeunload",()=>{
            localStorage.setItem("data",JSON.stringify(this.$store.state))
        })

        this.Downloaddata = this.$store.state.Downloaddata
        this.$store.dispatch("Downloaddata")
    },
}
</script>
<style scoped>
    .download{
        position: relative;
       
        width: 100%;
        min-height: 0.8rem;
        margin: .1rem .08rem;
        box-sizing: border-box;
        padding: .2rem 0 .15rem .8rem;
        background-color: #f6f6f6;
    }

    
    img{
        position: absolute;
        top: .2rem;
        left: .2rem;
        width: .45rem;
        height: .45rem;
    }
    p{
        color: #999;
        font-size: .12rem;
        line-height: .3rem;
    }
    button{
        position: absolute;
        right: .2rem;
        top: 50%;
        margin-top: -.15rem;
        padding: 0 .15rem;
        height: .2rem;
        line-height: .2rem;
        text-align: center;
        font-size: .14rem;
        color: #1f89f6;
        border: none;
    }
</style>