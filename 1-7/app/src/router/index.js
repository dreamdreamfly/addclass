import Vue from 'vue'
import VueRouter from 'vue-router'
import Bf from '../components/beforeEach.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Bf,
   
  },
  {
    path: '/p1',  
    component: () => import('../components/p1.vue'),

    meta:{requiresAuth: true} //添加此属性，跳转该路由需要进行验证


    // //局部守卫，跳转路由进入该路由的时候触发
    // //相同的路由跳转下先进入全局守卫执行代码，如果全局没有next会找局部的守卫代码执行
    // beforeEnter: (to, from, next) => {    
    //    if(from.fullPath==='/p2'){
    //     next(false)
    //    }else{
    //      next()
    //    }
       
       
    // }
  },
  {
    path: '/p2',  
    component: () => import('../components/p2.vue'),
  },
  {
    path: '/foo/:id',  
    component: () => import('../components/foo.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/*
next()正常跳转
next(false)中断跳转
next('/') 等同于push  也可以next({path:'/'})

全局的：beforeEach(切换路由的时候触发)

组件中的beforeRouyeLeave 离开组件的时候触发
复用组件使用beforeRouteUpdate去进行监听

局部的：路由中的beforeEnter 进入路由的时候触发
*/
//全局的路由（导航）切换时触发
// router.beforeEach((to,from,next)=>{
//   console.log(to,from,next);
//   if(to.fullPath==='/p1'&&from.fullPath==='/p2'){
//     next(false)
//   }else{
//     next()
//   }
 
  
// })

router.beforeEach((to,from,next)=>{
  
  //看看是否需要验证
 if(to.matched.some(item=>item.meta.requiresAuth)){
   console.log('需要验证');
   console.log(to.matched);
   
 }else{
   console.log('不需要验证');
   
 }
  
})

export default router
