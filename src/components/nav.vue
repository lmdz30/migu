<!--
 * @Author: your name
 * @Date: 2020-07-27 09:15:09
 * @LastEditTime: 2020-08-01 16:18:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\migu\src\components\nav.vue
--> 
<template>
  <div class="nav">
      <div class="box">
    <div class="box1">
        <router-link to="/">推荐</router-link>
    </div>
    <div class="box1">
        <router-link to="/Music">音乐</router-link>
    </div>
    <div class="box1">
        <router-link to="/Video">视频</router-link>
    </div>
    <div class="box1">
        <router-link to="/News">新闻</router-link>
    </div>
    <div class="box1">
        <router-link to="/Shop">商城</router-link>
    </div>
    <div class="box1">
        <router-link to="/Read">阅读</router-link>
    </div>
    <div class="box1">
        <router-link to="/Game">游戏</router-link>
    </div>
    <div class="box1">
        <router-link to="/Run">运动</router-link>
    </div>
    <div class="box1">
        <router-link to="/Comic">次元</router-link>
    </div>
    <div class="box1">
        <router-link to="/Service">客服</router-link>
    </div>
    
          </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box{
        background: #eee;
        padding: 0.1rem 0;
        white-space: nowrap;/*文本不会换行，文本会在在同一行上继续*/
        overflow-y:auto;/*可滑动*/
        background: rgb(15, 14, 14);
        display: flex;
        /* justify-content: space-between; */
    }
    /*自定义滚动条的伪对象选择器, CSS 可以隐藏滚动条*/
    .box::-webkit-scrollbar{
        display: none;
    }
    .box1{
        width: 49%;
        margin-left: 3%;
        height: 0.3rem;
        background: #fff;
        
			}
    a{
        display: block;
        width: 0.6rem;
        height: 100%;
        text-decoration: none;
        text-align: center;
        line-height: 0.3rem;
        font-size:0.2rem ;
        display: block;
    }
</style>