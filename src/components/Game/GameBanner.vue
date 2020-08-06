<template>

  <div class="Banner">
    <div class="bgc">

    </div>

       <div class="block">
    <el-carousel height="173px" :interval="a">
      <el-carousel-item v-for="(item,i) in $store.state.imagurl" :key="i">
        <img :src="item.src" alt=""  @click="jump()">
      </el-carousel-item>
    </el-carousel>
   
  </div>
  
      </div>  
</template>

<script>
import {dataAjax} from "@/api/axiosAPI.js"
export default {

    data() {
      return {
          a:1500,
            }
      },
       methods:{
      jump(){
              this.$router.push('/GameLink')
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
          this.$store.dispatch("imagurl")
        },
       
  }
</script>

<style scoped>
.Banner{
  overflow: hidden;
  position: relative;
}
.bgc{
  width: 100%;
  height: 90px;
 border-radius: 0 0 .46rem .46rem;
  background: linear-gradient(to bottom,#0b0b0b 0,#212121 100%);
  position: absolute;
  top: 0;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    border-radius:0.2rem ;
    
  }
  .el-carousel{
    margin-left:13px ;
    width: 350px;
    margin-top: 8px;
    height: 173px;
    border-radius:0.2rem ;
  }
  .el-carousel__item{
    border-radius:0.2rem ;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  img{
    width: 100%;
    height: 100%;
    border-radius:0.2rem ;
  }
</style>