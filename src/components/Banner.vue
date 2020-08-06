<template>

  <div class="Banner">
<<<<<<< HEAD
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
=======
    <div class="bgc">

    </div>

       <div class="block">
    <el-carousel height="173px" :interval="a">
      <el-carousel-item v-for="item in img" :key="item.id">
        <img :src="item.src" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  
>>>>>>> 9448dbb... 王
      </div>  
</template>

<script>

export default {
<<<<<<< HEAD
  
=======
  data() {
    return {
      a:1500,
      img:[
        {src:"https://cdn.migu.cn/12001/upload/graphicLink/20200724142817285729.jpg",id:111},
        {src:"https://cdn.migu.cn/12001/upload/graphicLink/20200715150923091201.jpg",id:222},
        {src:"https://cdn.migu.cn/12001/upload/graphicLink/20200724114613462646.jpg",id:333},
        {src:"https://cdn.migu.cn/12001/upload/graphicLink/20200724114534451760.jpg",id:444},
      ]
    }


  },
>>>>>>> 9448dbb... 王
}
</script>

<style scoped>
<<<<<<< HEAD
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
=======
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
>>>>>>> 9448dbb... 王
  }
</style>