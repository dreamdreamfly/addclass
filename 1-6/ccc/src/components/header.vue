<template>
     <header class="header" >
        <h1>todos</h1>
        <input 
            
            class="new-todo" 
            placeholder="请输入内容" 
            v-model="num"
            @keyup.13="add"
        >
    </header>
</template>

<script>
    export default {
        data(){
            return {
                num:''
            }
        },
        methods:{
            add(){
               this.$emit('cd',this.num)
               this.num=''
            }
        }
    }
</script>

<style scoped>

</style>