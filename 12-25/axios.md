- 数据请求方法：ajax（xhr），fetch，axios请求方式：get post delete put head等

- 安装模块 必须有package.json  要初始化 指令是npm init -y生成package.json 
  在输入 npm i express -s  项目依赖( 安装nodel -moduels    npm i)
安装axios       npm i axios
- 引入axios
- axios.get方法axios.get('url?xx=yy').then(d=>{
    consle.log(d)//{data:{code:12;msg:123}}
})
```
axios.get('/islogin').then(data=>{
		console.log(data.data);})//data.data是我们想要的
```
- axios.post方法axios.post('url',{key:value})
```
user.onblur =async function(){
       let v =this.value.trim();
       let b = await axios.post('getname',{user:v})
       console.log(b.data);//是我们想要的       
   }
```
- 并发
```
 /*
        并发：
        axios.all([a,b]).then(axios.spread(function(a,b){
            //a和b执行完
        }))
        请求拦截：（interceptors requst）是指可以拦截每次或者指定http请求，并可以修改配置项
        响应拦截器：（interceptors response）可以在每次http请求后拦截住每次或指定http请求，并可以修改返回的结果项。
        
        */
    //a执行完b在执行,7秒（时间是两个请求之和）
    // document.onclick = async function(){
    //     let a =await axios.get('/a')
    //     let b =await axios.get('/b')
    //     let c= await axios.get('/c?user='+a.data.user+'&iphone='+b.data.iphone).then(({data})=>data)  
    //     console.log(c);
              
    // }


    // //一起请求，5秒完成（时间是两个请求中的最大着 ）
    // document.onclick =function(){
    //     axios.all([axios.get('/a'),axios.get('b')]).then(axios.spread((res1, res2)=>{
    //         // console.log(res1,res2);//res1第一个请求的返回值res1.data是我们想要的，res2第二个请求的返回值
    //         axios.get('/c?user='+res1.data.user+'&iphone='+res2.data.iphone).then(d=>{
    //             console.log(d);
                
    //         })           
    //     }))
    // }
```
- 拦截器(全局的)本页所有的axios请求
```
 let timer = null,num =0;
    //请求拦截用于开loading 登录验证 权限验证            
    axios.interceptors.request.use(config => {
        console.log('拦截',config);//通过config可以修改配置项config.url ='/b'
        timer=setInterval(()=>{
    console.log(num++);
    
        },1000)
        
    // Do something before request is sent
    return config;//没有return会报错
    },error => {
    // Do something with request error
    return Promise.reject(error);
    });
    //响应拦截关loading 二次操作数据  如果接口自带登录验证或者权限验证，也可以做路由跳转

    axios.interceptors.response.use(response => {
        clearInterval(timer)
    // Do something before response is sent
    return response;
    },error => {
    // Do something with response error
    return Promise.reject(error);
    });
    document.onclick =async function(){
        let a =await axios.get('/a')
       console.log(a.data);
       
    }
```
- 自定义拦截(只会拦截由intance代替axios发起的请求，其余的都一样)
```
 const intance = axios.create();=>intance=axios
```
- 移除拦截：
拦截器都有一个返回值，把返回值放到eject里面即可
```
axios.interceptors.response.eject(返回值)
axios.interceptors.request.eject(返回值)
```





