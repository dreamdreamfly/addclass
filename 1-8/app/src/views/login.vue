<template>
    <div>
        login
      <h1>登录</h1>
      用户名:<input type="text" v-model="val">
      <button @click="click">登录</button>
      <button @click="click2">是否登录</button>
    </div>
</template>

<script>

    import {get,post} from '../api/api'
    export default {
        data(){
            return {
                val:''
            }
        },
        methods:{
            click(){
                
                post(this.val).then(data=>{
                    if(data.code==0){
                        this.$router.push('/')
                    }else{
                        alert(data.msg)
                    }
                    
                })
                this.val=''
                    
               // get().then(data=>{
                //     console.log(data);
                //})

            },
            click2(){

            }
        }
    }
</script>

<style scoped>

</style>