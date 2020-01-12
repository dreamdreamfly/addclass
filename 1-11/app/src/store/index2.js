export default {
    state: {
        // val:'珠峰培训',
        data:2
      },
      //方同步代码
      mutations: {
        add2(state){
          state.data++
        }
      },
      //放异步代码
      actions: {
       asyncadd1(context) {
         setTimeout(() => {
          context.commit('add2')
         }, 2000);
       },
      },
    //   getters:{
    //    revers(state){
    //      return state.val.split('').reverse().join('')
    //    } 
    //   },
}