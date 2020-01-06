<template>
   <section class="main">
        <input 
        class="toggle-all" 
        type="checkbox" 
        :checked="all"
        @click="cg"
        >
       
        <ul class="todo-list">          
           <li  
            :class="{editing:val.onoff}"          
            v-for="(val,key) in pdata"
            >
                <div class="view">
                    <input 
                    class="toggle"
                    type="checkbox" 
                    v-model="val.checked"
                   
                    >
                    <label
                     @dblclick="src(val.id)"
                    >{{val.txt}}</label>
                    <button 
                    class="destroy"
                    @click="cgd(val)"
                    ></button>
                </div>
                <input 
                autofocus
                :value="val.txt"
                @blur="br(val.id,$event)"
                @keyup.esc="esc(val.id)"
                    class="edit" 
                />
            </li>
        </ul>
    </section>
</template>

<script>

    export default {
        props:['pdata'],
        data(){
            return {
                all:'false'
            }
        },
        methods:{
        esc(id){
           this.$emit('pesc',id)
        },
        cg(){
              this.$emit('cc',this.all)
        },
        cgd(val){           
            this.$emit('pcg',val.id)
        },
        src(val){
            this.$emit('psrk',val)
        },
        br(id,ev){
            
            this.$emit('pbr',id,ev.target.value)
        }
        },
        watch:{
            pdata:{
                handler(){
                    
                   return this.all= this.pdata.length&&this.pdata.every(item=>item.checked)
                },
                deep:true,
                immediate:true
                
                
            }
        }
    }
</script>

<style scoped>

</style>