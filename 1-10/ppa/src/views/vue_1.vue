<template>
    <div>
        <h1>Vuex-1</h1>
        <button @click="add">{{num}}</button>
         <button @click="add2">异步{{num}}</button>
    </div>
    
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
    export default {
        computed: {
            ...mapState(['num']),
           
        },
        methods: {
            /*
            ...mapMutations(['increment']),
            add(){
                this.increment()
            }
            */
           /*
            ...mapMutations({add: 'increment'})
           
           */
          add(){
                 this.$store.commit('increment');
             },  
          //异步
        //   add2(){
        //        this.$store.dispatch('asyncincrement')
        //     }  
        ...mapActions(['asyncincrement']),
        add2(){
            this.asyncincrement()
        }
        // ...mapActions({add2:'asyncincrement'})
        },

    }
</script>

<style scoped>

</style>