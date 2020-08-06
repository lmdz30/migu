<<<<<<< HEAD
<!--
 * @Author: your name
 * @Date: 2020-07-27 09:15:09
 * @LastEditTime: 2020-07-31 20:58:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\migu\src\views\Game.vue
--> 
<template>
  <div><h1>游戏</h1>
  
  </div>
</template>

<script>
export default {

}
</script>

<style>
=======
<template>
 <div>
  <GameBanner></GameBanner>
  <Download></Download>
  <Best :bestarra="arra1" :titlea="tita1"></Best>
  <Best :bestarra="arrb1" :titlea="titb1"></Best>
  <Best :bestarra="arrc1" :titlea="titc1"></Best>
  <GameClass :gamearr="gamea1" :gametitarr="gametita1"></GameClass>
  <GameClass :gamearr="gameb1" :gametitarr="gametitb1"></GameClass>
  <GameClass :gamearr="gamec1" :gametitarr="gametitc1"></GameClass>
  <GameList></GameList>
 <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
 </div>
</template>

<script>
import GameBanner from "../components/Game/GameBanner.vue"
import Download from "../components/Game/Download.vue"
import Best from "../components/Game/Best.vue"
import GameClass from "../components/Game/GameClass.vue"
import GameList from "../components/Game/GameList.vue"
import {dataAjax} from "@/api/axiosAPI.js"

export default {
  components:{
    GameBanner,
    Download,
    Best,
    GameClass,
    GameList
  },
  data() {
    return {
      //本月最佳的内容数据
      arrsa: [],
      arrtitlea:"",
        //新游畅玩的内容数据
      arrsb: [],
      arrtitleb:"",
        //必玩精品的内容数据
      arrsc: [],
      arrtitlec:"",
      gamea:[], gametita:"",
      gameb:[],gametitb:"",
      gamec:[],gametitc:"",
      currentPage: 1,
     
      
    };
  },
   created(){  

    dataAjax().then(ok=>{
          this.arrsa = ok.data.Best.info
          this.arrtitlea = ok.data.Best.title

          this.arrsb = ok.data.Play.info
          this.arrtitleb = ok.data.Play.title

          this.arrsc = ok.data.Must.info
          this.arrtitlec = ok.data.Must.title

          console.log(ok.data.GameLists.hot.info.slice(0,3))
          this.gamea= ok.data.GameLists.hot.info
          this.gametita= ok.data.GameLists.hot.title
     
          this.gameb= ok.data.GameLists.new.info
          this.gametitb= ok.data.GameLists.new.title
             
          this.gamec= ok.data.GameLists.good.info
          this.gametitc= ok.data.GameLists.good.title
          this.$store.commit("show")
    })
   
  },
   computed:{
    arra1(){
      return this.arrsa.slice(0,3)
    },
    arrb1(){
      return this.arrsb.slice(0,3)
    },
    arrc1(){
      return this.arrsc.slice(0,3)
    },
    tita1(){
      return this.arrtitlea
    },
    titb1(){
      return this.arrtitleb
    },
    titc1(){
      return this.arrtitlec
    },
    gamea1(){
      return this.gamea.slice(0,5)
    },
    gameb1(){
      return this.gameb.slice(0,5)
    },
    gamec1(){
      return this.gamec.slice(0,5)
    },
    gametita1(){
      return this.gametita
    },
    gametitb1(){
      return this.gametitb
    },
    gametitc1(){
      return this.gametitc
    }
   
   
    
  }
 
}
</script>

<style scoped>
>>>>>>> 9448dbb... 王

</style>