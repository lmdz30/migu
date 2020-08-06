<template>
  <div class="content">
    <template>
      <div class="topbar">
        <van-nav-bar title="购物车" left-text="返回" right-text left-arrow @click-left="$router.go(-1)" />
      </div>
    </template>
    <template>
      <div class="shopcar">
        <van-swipe-cell  v-for="(item,index) in abcd"  :key="index" >
      <van-card :price="item.msg.selectedSkuComb.price/100+'.00'" :desc="item.msg.content.product"  :thumb="bc(index)[0].imgUrl" :num="item.msg.selectedNum" >
        <template #tags>
          <van-tag plain type="danger">{{item.msg.selectedSkuComb.s1}}</van-tag>&nbsp;&nbsp;
          <van-tag plain type="danger" v-show="item.msg.selectedSkuComb.s2=='0' ? false : true">{{item.msg.selectedSkuComb.s2}}</van-tag> 
      
      
      <van-checkbox v-model="che[index]" @click="check_one();calc()"></van-checkbox>

          
        </template>
      </van-card>
        
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" @click="del(index);calc()" />
      </template>
    </van-swipe-cell>
    <van-empty
      class="custom-image"
      image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      description="您的购物车还没有商品" v-show="abcd=='' ? true : false"
    />
      </div>
    </template>

    <van-submit-bar :price="allPrice" button-text="提交订单" @submit="onSubmit" >
      <van-checkbox v-model="AllChecked" @click="AllCheck();calc()">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>

  </div>
</template>
<script>
export default {
  data() {
    return {
      shopList:'',
      AllChecked: false,
      value: 2,
      che:[],
      allPrice:0,
      abcd:[]
    };
  },
  methods: {
     onSubmit() {
        let carArr = [];
      for(let i in this.che){
       
        if(this.che[i] == true){
          carArr.push(i)
          console.log(i)
          
        }
      }
      console.log(carArr)
       this.$router.push('/order/?num='+carArr)
     

    },
    onClickEditAddress() {

    },
    AllCheck(){     
if(this.AllChecked){

this.che=[]
for(let i in this.abcd){
 this.che[i]=this.AllChecked;
      }
}else{
this.che=[]
}
    },

    check_one() {
          var checked_num=0;
          for(let i in this.che){
                if(this.che[i]){
                  checked_num++;
                } 
          }
          if(checked_num == this.abcd.length){ 
            this.AllChecked=true;
            } else {
              this.AllChecked=false;
            }
  },
  bc(i){
      // console.log(JSON.parse(localStorage.getItem('cart'))[i]);
      let bc = JSON.parse(localStorage.getItem('cart'))[i].msg.content.sku.tree[0].v.filter((s)=>{
        if(s.id == JSON.parse(localStorage.getItem('cart'))[i].msg.selectedSkuComb.s1){
          return s
        }
      })
      // console.log(bc)
      return bc
    },
      del(i){

         let list = JSON.parse(localStorage.getItem('cart'));
      list.splice(i,1)
      localStorage.setItem('cart',JSON.stringify(list))
this.abcd.splice(i,1);
this.che.splice(i,1);
 

    },
    calc(){
        this.allPrice=0
        for(let i in this.che){
          if(this.che[i]){
            this.allPrice+=this.abc[i].msg.selectedSkuComb.price*this.abc[i].msg.selectedNum     
          }
        }
    }

  },
  computed: {
    abc(){
        let ac= JSON.parse(localStorage.getItem('cart'));
        this.abcd=ac
        return ac
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

 
    
   
      this.$store.dispatch("gettest");
  this.abc
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
.shopcar{
margin: .45rem 0 .9rem;
  overflow-y: auto;
}
.topbar{
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
}
.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
.van-card{
      padding: 8px 16px 8px 40px; 
}
.van-card .van-checkbox{
  position: absolute;
  left: -1.25rem;

}
.delete-button {
  height: 100%;
}
</style>