<template>
  <div class="content">
    <template>
      <div class="topbar">
        <van-nav-bar
          title="确认订单"
          left-text="返回"
          right-text
          left-arrow
          @click-left="$router.go(-1)"
        />
      </div>
    </template>
    <div class="cont">
      <van-swipe-cell v-for="(item,index) in abcd" :key="index">
        <van-card
          :price="item.msg.selectedSkuComb.price/100+'.00'"
          :desc="item.msg.content.product"
          :thumb="bc(index)[0].imgUrl"
          :num="item.msg.selectedNum"
        >
          <template #tags>
            <van-tag plain type="danger">{{item.msg.selectedSkuComb.s1}}</van-tag>&nbsp;&nbsp;
            <van-tag
              plain
              type="danger"
              v-show="item.msg.selectedSkuComb.s2=='0' ? false : true"
            >{{item.msg.selectedSkuComb.s2}}</van-tag>
          </template>
        </van-card>
      </van-swipe-cell>
    </div>
    <van-submit-bar :price="allPrice" button-text="确认订单" @submit="show=true"></van-submit-bar>

    <van-action-sheet v-model="show" :round="false">
      <van-password-input :value="PWDvalue" :focused="show" @focus="show = true" />

      <van-number-keyboard
        :show="show"
        theme="custom"
        extra-key="."
        close-button-text="确认"
        @blur="isOk"
        @input="onInput"
        @delete="onDelete"
      />
    </van-action-sheet>
    <div class="toast" v-show="toastShow">{{toastText}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      PWDvalue: "",
      shopList: "",
      value: 2,
      allPrice: 0,
      abcd: [],
      toastShow: false,
      toastText: "",
    };
  },
  methods: {
    onInput(key) {
      this.PWDvalue = (this.PWDvalue + key).slice(0, 6);
    },
    onDelete() {
      this.PWDvalue = this.PWDvalue.slice(0, this.PWDvalue.length - 1);
    },
    isOk() {
      if (this.PWDvalue.length == 6) {
        this.show = false;
        this.$toast("支付成功");
        let goodsArr = this.$route.query.num.split(",");
        let list = JSON.parse(localStorage.getItem("cart"));
        let newarr = [];
        for (let item of goodsArr) {
          newarr.unshift(item);
        }
        for (let i of newarr) {
          list.splice(i, 1);
          localStorage.setItem("cart", JSON.stringify(list));
          this.abcd.splice(i, 1);
        }
        this.$router.push('/listshow')
      }
    },
    bc(i) {
      let goodsArr = this.$route.query.num.split(",");
      let bc = JSON.parse(localStorage.getItem("cart"))[
        goodsArr[i]
      ].msg.content.sku.tree[0].v.filter((s) => {
        if (
          s.id ==
          JSON.parse(localStorage.getItem("cart"))[goodsArr[i]].msg
            .selectedSkuComb.s1
        ) {
          return s;
        }
      });
      return bc;
    },
  },
  computed: {
    abc() {
      let ac = JSON.parse(localStorage.getItem("cart"));
      let goodsArr = this.$route.query.num.split(",");
      for (let item of goodsArr) {
        this.abcd.push(ac[item]);
      }
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
    this.abc;
    this.allPrice = 0;
    for (let i in this.abcd) {
      this.allPrice +=
        this.abcd[i].msg.selectedSkuComb.price * this.abcd[i].msg.selectedNum;
    }
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
.cont {
  margin: 0.45rem 0;
  overflow-y: auto;
}
.topbar {
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
.van-card {
  padding: 8px 16px 8px 40px;
}
.van-card .van-checkbox {
  position: absolute;
  left: -1.25rem;
}
.delete-button {
  height: 100%;
}
.van-popup--bottom {
  bottom: 500px;
}
</style>