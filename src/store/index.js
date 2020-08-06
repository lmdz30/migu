import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import shop from './shop'
=======
import {dataAjax} from "@/api/axiosAPI.js"
import {houduan} from "@/api/axiosAPI.js"
import {aduio} from "@/api/axiosAPI.js"
import {book} from "@/api/axiosAPI.js"
>>>>>>> 9448dbb... 王

Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
  modules: {
    shop
=======
  state: {
   Downloaddata:[],
   VaddDown:[],
   showFlag:true,
   GameInfo:[],
   GameLink:[],
   imagurl:[],
   GameList:[],
   Play:[],
   houduan:[],
   aduio:[],
   book:[]
  },
  mutations: {
    show(state){
      state.showFlag=true
    },
    hide(state){
      state.showFlag=false
    },
    addDown(state,payload){
        state.Downloaddata = payload
    },
    VaddDown(state,payload){
        state.VaddDown = payload
    },
    GameList(state,payload){
        state.GameList = payload
    },
    GameLink(state,payload){
        state.GameLink = payload
    },
    GameInfo(state,payload){
      state.GameInfo = payload
    },
    Play(state,payload){
      state.Play = payload
    },
    GameList(state,payload){
      state.GameList = payload
    },
    imagurl(state,payload){
      state.imagurl = payload
    },
    houduan(state,payload){
        state.houduan=payload;
    },
    aduio(state,payload){
        state.aduio=payload;
    },
    book(state,payload){
        state.book=payload;
    }
    
  },
  actions: {
    Downloaddata(store){
      dataAjax().then(ok=>{
        store.commit("addDown",ok.data.Download)
      })
    },
    Vdata(store){
      dataAjax().then(ok=>{
        store.commit("VaddDown",ok.data.Best.info)
      })
    },
    GameLink(store){
      dataAjax().then(ok=>{
        store.commit("GameLink",ok.data.linkData)
      })
    },
    imagurl(store){
      dataAjax().then(ok=>{
        store.commit("imagurl",ok.data.imagurl)
      })
    },
    GameInfo(store,payload){
      dataAjax().then(ok=>{
        // console.log(payload)
          if(payload== "A"){
             
              store.commit("GameInfo",ok.data.Best.info)
          }else if(payload = "B"){
              
              store.commit("GameInfo",ok.data.Play.info)
          }else if(payload = "C"){
              
                store.commit("GameInfo",ok.data.Must.info)
          }
          
      })
    },
    Play(store,payload){
      dataAjax().then(ok=>{
        if(payload = "H"){
              
          store.commit("Play",ok.data.GameLists.hot.info)
        }else if(payload = "N"){
            
          store.commit("Play",ok.data.GameLists.new.info)
        }else if(payload = "G"){
            
          store.commit("Play",ok.data.GameLists.good.info)
        }
          
      })
    },
    GameList(store,payload){
      dataAjax().then(ok=>{
        // console.log(payload)
          if(payload== "热门榜"){
              store.commit("GameList",ok.data.GameLists.hot.info)
          }else if(payload = "新品榜"){
              store.commit("GameList",ok.data.GameLists.new.info)
          }else if(payload = "口碑榜"){
                store.commit("GameList",ok.data.GameLists.good.info)
          }
        
      })
    },
    houtaiact(store){
      houduan().then(ok=>{ 
        store.commit("houduan",ok.data)
         
      })
    },
    aduioact(store){
      aduio().then(ok=>{ 
        console.log(ok.data);
        store.commit("aduio",ok.data)
         
      })
    },
    bookact(store){
      book().then(ok=>{ 
        store.commit("book",ok.data)
         
      })
    }
  },
  modules: {

>>>>>>> 9448dbb... 王
  }
})
