import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.config.productionTip = false
import Home from './components/home.vue'
import About from './components/about.vue'
import Public from './components/public.vue'


const router =new VueRouter({
  //routes不能变
  routes: [{
    path:'/',
    component:Home
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/public',
    component:Public
  }],
  mode:'history'
})
new Vue({
  //属性名不能变
  router,
  render: h => h(App),
}).$mount('#app')
