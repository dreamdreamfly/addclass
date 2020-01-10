<template>
    <div>
     foo
     <div v-if="$route.params.id==1">foo1</div>
     <div v-if="$route.params.id==2">foo2</div>
    </div>
</template>

<script>
    export default {
        created() {
            console.log(1);
            
        },
        //组件复用来回切换的时候会触发，也就是动态路由
        beforeRouteUpdate (to, from, next) {
            console.log('切换');
            
            next()
        },
        //离开组件的时候触发，动态路由是同一个组件来回切换不会触发的
        beforeRouteLeave (to, from, next) {
            let b =confirm()
            //confirm是一个弹框，点击确认返回值是true，点击取消返回值是false
            if(b){
                next()
            }else{
                next(false)
            }
        }
    }
</script>

<style scoped>

</style>