<template>
    <div>
    <p>请登录</p>
    用户名:<input type="text" v-model="username">
    密码:<input type="password" v-model="pw">
    <button @click="dlfn">登录</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                username:'',
                pw:''
            }
        },
        methods: {
          dlfn(){
            const {username,pw}=this
            setTimeout(()=>{
                if(username=='hyw'&&pw=='123'){
            //编程式导航
            //跳转
            //  this.$router.push('/')
            // this.$router.push({
            //     path:'/',
            //     query:{  //?name=hyw把参数返回给path路径下的页面，可以通过$route.query.name获取到信息
            //         name:'hyw'
            //     }
            // })
            this.$router.push({
                name:'home',
                params:{  // 记得在配置路由的时候加name，注意的是路由上不会显示nn，但是可以通过$route.params.nn去获取到
                    nn:'hyw'
                }
            })
        //this.$router.go(只能是正负整数)正向前
        // this.$router.replace('/')
        //replace上一个页面无法返回去了被替换了
         }
            },1000)
        }
        },
       
    }
</script>

<style scoped>

</style>