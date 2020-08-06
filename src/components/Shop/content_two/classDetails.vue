<!--
 * @Author: your name
 * @Date: 2020-07-27 09:49:15
 * @LastEditTime: 2020-08-03 09:26:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\migu\src\components\Shop\content_two\classDetails.vue
--> 

<template>
  <div class="img">
    <h4>—{{this.$route.query.type}}—</h4>
    <div class="goodsDetaList">
      <router-link :to="{path:'/dateilspage',query:{type:v.type,goods_id:v.goods_id}}" v-for="(v,i) in newShopList" :key="i">
        <GoodsView class="goodsView" :goodsLi="v"></GoodsView>
      </router-link>
    </div>
  </div>
</template>
<script>
import GoodsView from "./goodsPreview.vue";

export default {
 
  mounted() {
    // console.log(this.$route.params.title)
    // console.log(this.$store.state.shop.arr.classDetails.cont)
    // this.$route.params.type = this.$store.state.shop.arr.shopContent.content.type;
  },
  computed: {
    newShopList() {
      let shopArr = this.goodsList.content.filter((s) => {
        if (s.type == this.$route.query.type) {
          // console.log(v.title)
          return s;
        }
      })
      console.log(shopArr[0])
      return shopArr
     
    },
     
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

    this.$store.dispatch("gettest");
    this.goodsList = this.$store.state.shop.arr.shopContent;
    // console.log(this.$store.state.shop)
  },

  data() {
    return {
      goodsList: "",
    };
  },
  components: {
    GoodsView,
  },
};
</script>
<style scoped>
h4 {
  text-align: center;
}
.goodsDetaList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 0.1rem;
}


.img{
  height:100%;
  background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596279905728&di=4775694eec232ceadd7c2a6c04c1ce71&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F17%2F20170817061151_8cyQf.thumb.700_0.jpeg') no-repeat;
    background-size:100% 100%;
}
</style>