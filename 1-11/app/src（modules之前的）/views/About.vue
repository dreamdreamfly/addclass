<template>
  <div>
{{$store.state.data}}
{{$store.getters.revers}}
<button @click="adds">{{data}}</button>
<button @click="adds2">{{data}}</button>
{{revers}}
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
  export default {
    //不用引入辅助函数可以{{$store.state.data}}
    //引辅助函数的第一种方法
    computed:{
      ...mapState(['data']),
      //不适用辅助函数{{$store.getters.revers}}
      //使用辅助函数{{revers}}
      ...mapGetters(['revers'])

    },
    // //引用辅助函数的第二种写法
    // computed: mapState({
    //   data:state=>state.data,
    // })
    // //引用辅助函数的第三种方法
    // computed: mapState(['data'])

    //不用辅助函数修改数据的方法
  //  methods: {
  //    adds(){   
  //      this.$store.commit('add')
  //    }
  //  },
  //使用辅助函数修改数据的第一种方式
  methods: {
    ...mapMutations(['add']),
    adds(){
      this.add()
    },
    //异步请求不用辅助函数的方法
    // adds2(){
    //   this.$store.dispatch('asyncadd1')
    // }
    //异步请求使用辅助函数的第一种写法
    ...mapActions(['asyncadd1']),
    adds2(){
      this.asyncadd1()
    }
    //异步请求使用辅助函数的第二种写法
    //...mapActions({adds2:'asyncadd1'})
  },
  //使用辅助函数修改数据的第二种方式
  // methods: {
  //   ...mapMutations({adds:'add'})
  // },
  }
</script>

<style scoped>

</style>