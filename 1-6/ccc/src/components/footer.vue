<template>
    <footer class="footer">
	            <span class="todo-count">
	            	<strong>{{plen}}</strong>
	            	<span>条未选中</span>
                </span>
                <ul 
                    class="filters"
                >
                    <li 
                    v-for="(val,key) in attr"
                    >
                        <a  @click="fn(key,val.txt)"
                            href="#/all" 
                            :class="{selected:attrnum==key}"
                           
                        >{{val.txt}}</a>
                    </li>
                    
                </ul>
            </footer>
</template>

<script>
    export default {
        props:['plen'],
        data(){
            return {
                attrnum:0,
                attr:[
                    {
                        id:0,
                        
                        txt:'全部'
                    },
                    {
                        id:1,
                       
                        txt:'未选中'
                    },
                    {
                        id:2,
                       
                        txt:'已选中'
                    }
                ]
            }
        },
        methods:{
            fn(key,val){
                this.attrnum=key
                this.$emit('abc',val)
            }
        }
    }
</script>

<style scoped>

</style>