<template>
  <div id="app">
    <router-link tag="button" to="/p1">p1</router-link>
    <router-link tag="button" to="/p2">p2</router-link>    
    <router-link to="/foo/1">foo1</router-link>
    <router-link to="/foo/2">foo2</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
