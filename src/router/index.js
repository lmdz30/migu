/*
 * @Author: your name
 * @Date: 2020-07-27 09:15:09
 * @LastEditTime: 2020-08-05 17:59:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \VUE\migu\src\router\index.js
 */
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

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
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
    component: Game
  },
  {
    path: '/Music',
    name: 'Music',
    component: Music,

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
  },
  {
    path: '/Video',
    name: 'Video',
    component: Video
  },

  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/*',
    component: () => import('@/views/Err')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
