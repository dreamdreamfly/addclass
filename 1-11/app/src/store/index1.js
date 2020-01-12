export default {
    state: {

        data:1
      },
      //方同步代码
      mutations: {
        add1(state){
          state.data++
        }
      },
      //放异步代码
      actions: {
       asyncadd1(context) {
         setTimeout(() => {
          context.commit('add1')
         }, 2000);
       },
      },
    //   getters:{
    //    revers(state){
    //      return state.val.split('').reverse().join('')
    //    } 
    //   },
}