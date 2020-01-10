import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
    meta:{yz:true}
  },
  {
    path: '/public',
    component: () => import('../views/public.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  }
]
import {islogin} from '../api/api'
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(async (to,from,next)=>{
  
  if(to.matched.some(item=>item.meta.yz)){
    let flg =await islogin()
    if(flg){
      next()
    }else{
      next('login')
    }
  }else{
    next()
  }
  
})

export default router
