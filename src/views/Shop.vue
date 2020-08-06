<!--
 * @Author: your name
 * @Date: 2020-07-27 09:15:09
 * @LastEditTime: 2020-08-01 15:28:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\migu\src\views\Shop.vue
--> 
<template>
  <div>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="商品分类" style="text-align:center" class="p1">
        <van-tag class="w1" type="warning" v-for="(item,index) in shopList.type" :key="index">
          <router-link :to="{path:'/listpage',query:{type:item}}">{{item}}</router-link>
        </van-tag>
      </van-collapse-item>
    </van-collapse>
    <Content></Content>
  </div>
</template>

<script>
import Content from "@/components/Shop/content_one/content";

export default {
  name: "shop",
  data() {
    return {
      shopList:'',
      activeName: "",
    };
  },
  components: {
    Content,
  },
methods: {
  
  
},
  created() {
    //在页面加载时读取localStorage里的状态信息
    if (localStorage.getItem("data")) {
      //replaceState替换数据 Object.assign合并对象
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem("data"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("data", JSON.stringify(this.$store.state));
    });

    this.shopList = this.$store.state.shop.arr.shopContent;
    this.$store.dispatch("gettest");
    // console.log(this.shopList);
  },

};
</script>

<style>
.van-collapse-item {
  border-bottom: 1px solid red;
}
.van-collapse-item__content {
  height: 1.1rem;
  overflow-x: auto;
}

.p1 a {
  display: inline-block;
  color: white;
  width: 0.9rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
}

.p1 .w1 {
  margin-bottom: 0.1rem;
  margin-left: 0.1rem;
}
</style>

       