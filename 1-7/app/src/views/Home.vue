<template>
  
<div id="nav">
      {{$route.query.name}}欢迎回来
      {{$route.params.nn}}欢迎回来
      
      <router-link tag="button" to="/public">public</router-link>
      <router-link to="/about/1">About1</router-link>
      <router-link to="/about/2">About2</router-link>
      <router-link :to="{name:'p4'}">p4</router-link>
    </div>

</template>

<script>
/*
<router-link tag="button" to="/public">public</router-link> 声明式导航
*/
  export default {
    
  }
</script>

<style scoped>

</style>