<template>
  <div class="content">
    <!-- 商品图  -->
    <div>
      <van-swipe @change="onChange">
        <van-swipe-item v-for="(v,i) in abc[0].img_arr" :key="i">
          <img :src="v" style="width:100%;height:100%" @click="showbigimg=true" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/{{v.img_arr.length}}</div>
        </template>
        <template #indicator>
          <div class="xq-back">
            <van-icon name="arrow-left" @click="$router.go(-1)" />
          </div>
        </template>
      </van-swipe>
    </div>
    <!-- 商品价格、标题 -->
    <div class="goods-xq">
      <div class="goods-price">
        <span class="goods-prvice">￥{{abc[0].sku.price}}--{{abc[0].sku.maxPrice}}</span>
        <van-count-down :time="time">
          <template v-slot="timeData">
            <p ref="bc" v-if="abc[0].time > new Date().getHours()">距离结束剩余</p>
            <p ref="bc" v-else>活动已经结束</p>
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
      </div>
      <div class="goods-text clearfix">
        <h6>{{abc[0].product}}</h6>
        <van-button round type="info" @click="showShare=true">分享</van-button>
      </div>
      <van-row type="flex" justify="space-between">
        <van-col>快递费:免运费</van-col>
        <van-col>
          月销:
          <span>{{abc[0].sales >10000 ? Math.floor(abc[0].sales/10000)+'万+':abc[0].sales }}</span>
        </van-col>
        <van-col>{{abc[0].address}}</van-col>
      </van-row>
    </div>
    <van-row @click="showServer=true" class="goods-sevice">
      <van-col span="4">服务</van-col>
      <van-col span="19">15天退货 · 1次破损补寄 · 运费险</van-col>
      <van-col span="1">
        <van-icon name="arrow" />
      </van-col>
    </van-row>

    <van-row @click="show=true" class="goods-sevice">
      <van-col span="4">规格</van-col>
      <van-col span="19">选择商品规格</van-col>
      <van-col span="1">
        <van-icon name="arrow" />
      </van-col>
    </van-row>

    <!-- sku  -->
    <van-sku ref='van'
      v-model="show"
      :sku="abc[0].sku"
      :goods-id="abc[0].goods_id"
      :goods="abc[0].goods_info"
      :quota="abc[0].quota"
      :hide-stock="abc[0].sku.hide_stock"
      :quotaUsed="abc[0].quota_used"
      :price="123"
           @add-cart="onAddCartClicked"
    />

    <!--       -->

    <!-- 服务 -->
    <van-popup v-model="showServer" round position="bottom">
      <h6>基础服务</h6>
      <van-cell title="单元格这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字" icon="passed" />
      <van-cell title="单元格这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字" icon="passed" />
      <van-cell title="单元格这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字" icon="passed" />
      <van-cell title="单元格这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字" icon="passed" />
      <van-cell title="单元格这是一段测试文字这是一段测试文字这是一段测试文字这是一段测试文字" icon="passed" />

      <van-button
        round
        type="info"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        @click="showServer=false"
        size="large"
      >完成</van-button>
    </van-popup>

    <!-- 分享 -->
    <van-share-sheet v-model="showShare" title="分享" :options="options" />
    <!-- 点击放大图片 -->
    <van-image-preview
      v-model="showbigimg"
      v-for="(v,i) in abc"
      :key="i"
      :images="v.img_arr"
      @change="onChange"
    >
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/{{v.img_arr.length}}</div>
      </template>
    </van-image-preview>

    <!--  下方加购/购买  -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" @click="toShopCar" />
      <van-goods-action-button type="warning" text="加入购物车" @click="show=true" />
    </van-goods-action>
  </div>
</template>
<script>
export default {
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
  computed: {
    abc() {
      let shopArr = this.shopList.content.filter((s) => {
        if (s.goods_id == this.$route.query.goods_id) {
          return s;
        }
      });
      console.log(shopArr);
       this.time =
        new Date(
          new Date().getFullYear() +
            "-" +
            (new Date().getMonth() + 1) +
            "-" +
            new Date().getDate() +
            "," +
            shopArr[0].time +
            ":00:00"
        ) - new Date();
        // console.log(-this.time)
        console.log(shopArr[0].time)
      return shopArr;
    },
  },

  methods: {

    onBuyClicked(data) {
      console.log(this.abc[0])
      this.$toast("buy:" + JSON.stringify(data));
      console.log(data);
    
    },
    onAddCartClicked(data) {

      //加入购物车
      // this.$toast("add cart:" + JSON.stringify(data));
       this.$toast("你已经购买成功，去购物车查看");
      // console.log(JSON.stringify(data))
      this.show = false;
        // window.localStorage.setItem('cart',JSON.stringify(data))
      if (localStorage.getItem("cart") == null) {
        let cartObj = {};
        // let cartObj1 = {};
        cartObj.msg = data;
        cartObj.bool = false;
        cartObj.msg.content = this.abc[0];
        const cart = [];
        cart.push(cartObj);
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        let bool = false;
        let newCart = JSON.parse(localStorage.getItem('cart'));
        newCart.forEach((item)=>{
          if(item.msg.selectedSkuComb.id == data.selectedSkuComb.id){
            item.msg.selectedNum += data.selectedNum;
            bool = true;
          }
        })
        if(bool == false){
          let cartObj = {};
          cartObj.msg = data;
          cartObj.msg.content = this.abc[0];
          cartObj.bool = false;
          newCart.push(cartObj)
        }
        localStorage.setItem('cart',JSON.stringify(newCart))
      }
    },
    onChange(index) {
      this.current = index;
    },

    toShopCar() {
      this.$router.push("/shopCar");
    },
  },

  data() {
    return {
      toTime: "",
      time: 0,
      shopList: [],
      showbigimg: false,
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
        ],
      ],
      showServer: false,
      current: 0,

      // sku数据

      show: false,
      closeOnClickOverlay: true,
    };
  },
};
</script>
<style scoped>
.content {
  position: absolute;
  top: 0;
  z-index: 999;
  margin-top: 0;
  background-color: rgb(245, 240, 240);
  margin-bottom: 0.5rem;
}
.van-swipe {
  width: 100vw;
  height: 100vw;
  background-color: pink;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 0.2rem;
  color: rgba(255, 255, 255, 0.801);
  background: rgba(0, 0, 0, 0.5);
}
.xq-back {
  display: block;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  background-color: rgba(0, 0, 0, 0.541);
  text-align: center;
  line-height: 0.35rem;
  color: #fff;
}
.goods-xq {
  margin-bottom: 0.1rem;
  padding: 0.1rem;
  background-color: #fff;
}
.goods-xq .goods-price {
  overflow: hidden;
}
.goods-xq .goods-prvice {
  font-size: 0.22rem;
  color: red;
  line-height: 0.4rem;
}
.goods-text {
  overflow: hidden;
}
.goods-text h6 {
  float: left;
  width: 80%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.goods-text .van-button {
  margin-top: 0.1rem;
  float: right;
  height: 0.2rem;
  background-color: #999;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 0;
  font-size: 0.12rem;
}

h6 {
  margin: 0.1rem 0 0.1rem;
  font-size: 0.16rem;
}
.goods-xq .van-col {
  font-size: 0.12rem;
}
.van-button {
  height: 0.36rem;
}
.van-popup h6 {
  text-align: center;
}
.goods-sevice {
  padding: 0 0.1rem;
  background-color: #fff;
  line-height: 0.4rem;
  font-size: 0.12rem;
}
.colon {
  display: inline-block;
  margin: 0 0.02rem;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 0.18rem;
  color: #fff;
  font-size: 0.1rem;
  text-align: center;
  background-color: #ee0a24;
}
.van-cell .van-icon-passed {
  color: rgb(231, 94, 53);
}
.van-count-down {
  float: right;
}
.van-count-down p {
  font-size: 0.12rem;
}
.clearfix::after {
  content: " ";
  display: inline-block;
  height: 0;
  clear: both;
  visibility: hidden;
  overflow: hidden;
}
</style>