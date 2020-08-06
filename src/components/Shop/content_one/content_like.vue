<template>
  <div>
  <div v-if="fun.length == 0">正在加载中·······</div>
    <div v-else v-for="(v,i) in fun" :key="i" class="title" ref='title'>
      <h3>{{$store.state.shop.arr.shopContent.title[i]}}</h3>
  <span @click="ab()">点我</span>
      <div>
        <ul>
          <li v-for="(item,index) in fun[i]" :key="index" @click="toDateils(item.goods_id)">
            <p>
              <img :src="item.img" />
            </p>
            <span>{{item.product}}</span>
            <br />
            <b>￥{{item.price}}</b>
            <i>找相似</i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "content_like",
  data() {
    
    return {
      shopList: "",
    };
  },
  methods:{
    toDateils(id){
      this.$router.push(`/dateilspage/?goods_id=${id}`)
    }
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
    console.log(this.shopList);
  },

  computed: {
    //数据中根据title去匹配相应的数据
    fun() {
      var oArr = this.shopList;
      this.shopList = [];
      // console.log(oArr.content[0])
      // console.log(oArr.title[0].indexOf(oArr.content[0].title))
      for (let i = 0; i < oArr.title.length; i++) {
        this.shopList.push([]);
        for (let j = 0; j < oArr.content.length; j++) {
          // console.log(oArr.title[i].indexOf(oArr.content[j].title))
          if (oArr.title[i].indexOf(oArr.content[j].title) == 0) {
            this.shopList[i].push(oArr.content[j]);
            // console.log(this.shopList);
          }
        }
      }
      return this.shopList;
    },
    
  },
};
</script>
<style scoped>
.title{
  margin-top:.2rem;
}
h3 {
  font-size: 20px;
  font-family: Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑",
    Arial, sans-serif;
  color: rgb(38, 160, 160);
}
.shopContent div {
  overflow: hidden;
}
.shopContent ul li {
  margin: 10px 0 0 10px;
  float: left;
  list-style: none;
  width: 1.75rem;
  border:1px solid goldenrod;
  border-radius: 2px;

}
.shopContent li p {
  width: 100%;
  height: 1.4rem;
  background: red;
}

img {
  width: 100%;
  height: 100%;
}
b {
  color: red;
  font-size: 20px;
}
span {
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
i {
  display: inline-block;
  width: 100%;
  line-height: 0.24rem;
  background: rgb(138, 101, 101, 0.6);
  border-radius: 5px;
  color: pink;
  text-align: center;
}
</style>    