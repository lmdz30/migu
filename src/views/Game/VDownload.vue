<template>
    <div class="cont">
         <video :src="Downloaddata[0].vsrc" controls autoplay loop></video>
        <router-link to="/VDownload/houduan">点击下载</router-link>
        
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
             "Downloaddata":[],
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
    this.Downloaddata = this.$store.state.VaddDown;
    this.$store.dispatch("Vdata")
    this.$store.commit("hide")
    },
}
</script>
<style scoped>
    .cont{
        width: 90%;
        margin: 0 auto;
        margin-top: -1.4rem;
        position: relative;
    }
     video{
        width: 100%;
        height: 3rem; 
    }
   a{
       display: block;
       height:.3rem;
       line-height: .3rem;
       width: 30%;
       font-weight: bold;
        text-align: center;
       background-color:#e8efab;
       position: absolute;
       left:50% ;
       transform: translateX(-50%);
       color: #333;
       border-radius: 10%;
       margin: .05rem 0;
   }
</style>