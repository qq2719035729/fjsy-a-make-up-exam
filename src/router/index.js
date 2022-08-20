import Vue from 'vue'
import VueRouter from 'vue-router'
//import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Shux from "@/views/Sunxu.vue"
import Shuj from "../views/Suiji.vue"
import Zhan from "../views/Zhanj.vue"
import Zhuan from "../views/ZhuanX.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sx',
    name: 'sunx',
    component: Shux
  },
  {
    path: '/sj',
    name: 'suij',
    component: Shuj
  },
  {
    path: '/zj',
    name: 'zhanj',
    component: Zhan
  },
  {
    path: '/zx',
    name: 'zhuanx',
    component: Zhuan
  },
]

/* const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) */
const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
