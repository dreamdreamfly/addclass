<template>
  <div>
    
    <router-link to="/" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link to="/public" tag="button">公共页</router-link>
   <router-view></router-view>
  </div>
</template>

<script>
/*
单页面SPA优点
  不刷新页面，在当前页切换多页的操作方式，能够提高用户体验
  一些后端逻辑就可以分给前端来做，减少后端的压力，提高前端开发的业务能力
  能够公用一些公共静态资源，减少http请求
  实现真正的前后端分离

  安装路由：
    npm install vue-router或者yarn add vue-router
  找到main.js(src文件夹下)
      1引包
         import VueRouter from 'vue-router'
      2安装路由功能
         Vue.use(VueRouter)
      3实例化VueRouter
        const router =new VueRouter({
          routes(属性名不能变):[
            path:'指定的路径',
            component:指定路径相应的组件(记得引入组件)
          ]
        })
      4挂路由
        默认配置是hash路由
        修改为history路由
        new VueRouter({
          mode:'history',
         
        })
      5设置路由页面渲染的位置
      <router-view></router-view>
      //点击按钮到指定
      <router-link to="/public" tag="button">公共页</router-link>
*/
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>