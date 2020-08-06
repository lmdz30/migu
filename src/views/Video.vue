
<template>
  <div>
    <h2>{{this.$store.state.shop.arr.shopDeatils.quota}}</h2>
    <van-sku
      v-model="show"
      :sku="this.$store.state.shop.arr.shopDeatils.sku"
      :goods="this.$store.state.shop.arr.shopDeatils.goods_info"
      :quota="this.$store.state.shop.arr.shopDeatils.quota"
      :hide-stock="this.$store.state.shop.arr.shopDeatils.sku.hide_stock"
      :quotaUsed="this.$store.state.shop.arr.shopDeatils.quota_used"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    
    />
  </div>
</template>
<script>
export default {
   methods: {
    onBuyClicked(data) {
      this.$toast("buy:" + JSON.stringify(data));
      console.log(JSON.stringify(data));
    },
    onAddCartClicked(data) { //加入购物车
	    this.$toast('add cart:' + JSON.stringify(data));
        console.log(JSON.stringify(data))
	}
   },
  
  data() {
    return {
      show:true,
      closeOnClickOverlay: true,
    }
  },
  created() {
    console.log(Date.now())
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
    console.log(this.$store.state.shop.arr.shopDeatils);
    console.log(this.$store.state.shop.arr.abc);
  },
};
</script>


<style scoped>
.van-sku-row__image-item--disabled {
  color: #000;
  cursor: not-allowed;
}
</style>