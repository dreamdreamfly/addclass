import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
    //首页上来就加载需要引入。
  },
  /*
  $route
  获取路由的信息，主要是使用属性
  $router
  跳转路由的方法，主要是方法
  
  动态路由
  /about/:id （id随便取的）
  可以匹配到后边带东西的（但是/about匹配不到）
  例如：/about/1 /about/2 等

  组件中this.$route.parmas.id(上面取得名字)可以获取动态路由的不同id（模版中不用加this）

  使用动态路由在同一个组件不同tab显示不同的内容，通过$route.parmas.id获取不同值来显示隐藏，从而达到想要的效果

  动态路由的优点：公用一个组件，因为组件复用比销毁在重建更加高效

  动态路由缺点：这同一个组件内来回切换不同的$route.params.id不会触发一些钩子函数如：created，可以使用watch监听
  watch:{
    '$route'(to,from){
       会用到 to.params.id
    }
  }
  

  编程式导航
  $router.push()
  $router.replace()
  $router.go()

  可以传字符串和对象
  '/'
  {
    path:'/',
    query:{
      name:'hyw'  =>/?name=hyw
    }
  }
  {
      name:'home',
      params:{  // 记得在配置路由的时候加name，注意的是路由上不会显示nn，但是可以通过$route.params.nn去获取到
          nn:'hyw'
      }
  }

  

  */
  {
    path: '/about/:id',
    // name: 'about',
    component: () => import('../views/About.vue')
    //延迟加载
  },
  {
    path: '/public',
   
    component: () => import('../views/Public.vue'),
    //延迟加载

    //嵌套路由(是两个不同的组件)第一 路径不能加 '/'  第二给公共部分加路由渲染组件的位置router-view，第三在路由配置中使用children:[path:'x'] 匹配的是/parent/x    
    children:[
      {
        path:'p1',
        component: () => import('../views/p1.vue')
      },
      {
        path:'p2',
        component: () => import('../views/p2.vue')
      },
      //如果进入parent下没有指定的children，又要默认添加一个组件，可以在path上写个''
      {
        path:'',
        component: () => import('../views/p3.vue')
      }
    ]
  },
  /*
  路由重命名
  需在对应组件下加入name属性自定一个名字
  并进行如下配置
  声明导航
  <router-link :to="{name:'p4'}">p4</router-link>
  
  */
  {
    path:'/p4',
    name:'p4',
    component: () => import('../views/p4.vue')
  },
  //重定向
  {
    path:'/p6',
    // redirect:'/p4'
    redirect:to=>{
      return '/p4'
    }
  },
  {
    path:'/login',
    component: () => import('../views/login.vue')
  },

  //404页面一定要放到最后
  {
    path: '*',
    component: () => import('../views/404.vue')
    //延迟加载
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
