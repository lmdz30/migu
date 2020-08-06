<<<<<<< HEAD
/*
 * @Author: your name
 * @Date: 2020-07-27 09:15:09
 * @LastEditTime: 2020-08-05 17:59:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\migu\src\router\index.js
 */
=======
>>>>>>> 9448dbb... 王
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Comic from '../views/Comic.vue'
import Game from '../views/Game.vue'
import Music from '../views/Music.vue'
import News from '../views/News.vue'
import Read from '../views/Read.vue'
import Run from '../views/Run.vue'
import Service from '../views/Service.vue'
import Shop from '../views/Shop.vue'
import Video from '../views/Video.vue'
<<<<<<< HEAD

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
=======
import Bestlayout from '../views/Game/Bestlayout.vue'


// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
>>>>>>> 9448dbb... 王
    name: 'Home',
    component: Home
  },
  {
    path: '/Comic',
    name: 'Comic',
    component: Comic
  },
  {
    path: '/Game',
    name: 'Game',
<<<<<<< HEAD
    component: Game
  },
  {
    path: '/Music',
    name: 'Music',
    component: Music,

=======
    component: Game,
  
  }, 
  {
    path:"/GameInfo/:id/:type",name:"GameInfo",component:()=>import("../views/Game/GameInfo.vue")

  },
  {
    path:"/Play/:num/:GType",name:"Play",component:()=>import("../views/Game/Play.vue")

  },
  {
    path:"/GameLink",name:"GameLink",component:()=>import("../views/Game/GameLink.vue")
  },
  {
    path:"/VDownload",
    name:"VDownload",
    component:()=>import("../views/Game/VDownload.vue"),
    children:[
      {path:"/VDownload/houduan",name:"houduan",component:()=>import("../views/Game/houduan.vue")},
    ]
  },
  {
    path: '/Bestlayout',name: 'Bestlayout',component:()=>import("../views/Game/Bestlayout.vue")    
  },
  {
    path: '/Hotlayout/:titgame',name: 'Hotlayout',component:()=>import("../views/Game/Hotlayout.vue")    
  },
  
  {
    path: '/Music',
    name: 'Music',
    component: Music
>>>>>>> 9448dbb... 王
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/Read',
    name: 'Read',
    component: Read
  },
  {
    path: '/Run',
    name: 'Run',
    component: Run
  },
  {
    path: '/Service',
    name: 'Service',
    component: Service
  },
  {
    path: '/Shop',
    name: 'Shop',
<<<<<<< HEAD
    component: Shop,
    
  },
  {
    path: '/shopCar',
    name: 'shopCar',
    component: () => import('@/components/Shop/content_four/shopCar')
  },
  {
    path:'/order',
    name:'order',
    component:()=>import('@/components/Shop/content_four/shopOrder')
  },
  
  {
    path: '/dateilspage',
    name: 'dateilspage',
    component: () => import('@/components/Shop/content_three/shopDateils')
  },
  {
    path: '/listpage',
    name: 'listpage',
    component: () => import('@/components/Shop/content_two/classDetails')
  },
  {
    path: '/listshow',
    name: 'listshow',
    component: () => import('@/components/Shop/content_four/listshow')
=======
    component: Shop
>>>>>>> 9448dbb... 王
  },
  {
    path: '/Video',
    name: 'Video',
    component: Video
  },
<<<<<<< HEAD

  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/*',
    component: () => import('@/views/Err')
  }
=======
>>>>>>> 9448dbb... 王
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
