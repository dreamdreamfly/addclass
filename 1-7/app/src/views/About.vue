<template>
  <div class="about">
    <router-link to="/">home</router-link>
    <router-link to="/about/1">About1</router-link>
      <router-link to="/about/2">About2</router-link>
    <h1>This is an about page</h1>
    {{$route.params}}
    <div v-if="$route.params.id==1">第一部分1</div>
    <div v-if="$route.params.id==2">第二部分2</div>
  </div>
</template>

<script>
  export default {
    watch: {
      '$route'(to,from){
        console.log(to,from);
        if(to.params.id==1){
          console.log('接口1');
          
        }else if(to.params.id==2){
          console.log('接口2');
        }
      }
    },
    
  }
</script>

<style scoped>

</style>