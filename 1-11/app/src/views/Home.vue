<template>
  <div>
{{$store.state.a.data}}
{{num1}}
{{num2}}
<button @click="add">1加</button>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
  export default {
    computed: {
      ...mapState({
           num1:state=>state.a.data,
           num2:state=>state.b.data
      }),
    // methods: {
    //   ...mapMutations(['a/add1']),
    //   add(){
    //     this['a/add']()
    //   }

    // },
      
    },
  }
</script>

<style scoped>

</style>