# 步骤
- node中没有DOM BOM
- node.js使用的是common.js规范
  - 引入node_modules和node里面的不用写路径直接引入即可(导出的是对象可以解构赋值)
```
const http =require('http')
```
  - 导出module.exports
```
module.exports ={
    fn:function(){}
}
```  
- 1 初始化npm init -y
- 2安装：npm install express -s 通过packjson.js可以查看是否安装
- 3引包
```
const express =require('express')
const app =express()
app.get('/login')
app.listen(80)
```
```
/*
1 初始化npm init -y
2安装：npm install express -s 通过packjson.js可以查看是否安装
3引包
*/
const express =require('express')
const app2 =express()
const fs =require('fs')//读取文件模块
const bp =require('body-parser')//post方式需要引入
/*
  中间件：
  功能增强
*/
app2.use(bp.urlencoded({extended:false}))//post方式需要使用中间件,参数只能是字符串
app2.use(bp.json())//post方式的参数可以是对象
app2.use(express.static('hp'))//设置静态文件路径

/*
req,res 都是二次封装的对象
req.query才是url参数且是对象
*/


app2.get('/login',function(req,res){
    console.log(req.query);//这是我们需要的请求参数字段
    if(req.query.name==='1'){
        // res.json({
        //     code:0,
        //     msg:'成功'
        // })
        res.send({
            code:1,
            msg:'成功'
        })
    }})
// post方式需要用中间件body-parser 直接引入即可
app2.post('/register',(req,res)=>{
  console.log(req.body);//这是我们需要的请求参数字段
  res.send({
      code:1,
      msg:'cg'
  })
})
//找不到的处理（404）
app2.use('*',(req,res)=>{
   let a = fs.readFileSync('./hp/404.html')//引入读取模块
   res.send(a.toString())
})


app2.listen(90)
```
- express-session模块(本地设置cookie)
需要安装express-session npm i express-session -s
引入 const session=require('express-session')
```
app.use(session({
    secret: '12期',//可以随便设置
    name: 'session_id',//本地的cookie的名字
    cookie: {maxAge: 10000},//过期时间
    resave: false,
    saveUninitialized: true,
    rolling:true //刷新cookie重置时间
}))

 req.session.userinfo = user; //设置
 req.session.userinfo//获取
```
- 路由
在服务器所在文件夹建一个文件夹名字可以是router
在router下在建不同的文件夹下面放js
每个js都引入
```
//1引入
const express =require('express');
const router =express.Router();//返回值一会导出用
/*
router的跟不是localhost而是dl.js的跟
*/
//2请求方式跟之前的一样
router.get('/',(res,req)=>{
    let {user} = res.query
    let o =ary.find(ele=>ele.name==user)
    let obj ={}  
   if(o){
       obj.code=0
       obj.msg='用户名已存在'
   }else{
    obj.code=1
    obj.msg='用户名可用'
    }
    req.json(obj)
});
//3导出
    module.exports =router//导出路由
```
原页面js
```
//请求方式改为use，require放路径即可
app.use('/mm',require('./routers/user/mm'))
```
如果使用原页面变量可以
```
app.use('*',(req,res,next)=>{
    req.ary =ary
    next()//上面的步骤完成，下面继续执行
})//抽离后可以找到主页的变量
```
# multer(上传模块) 
下载: npm i multer -s
原生的
# axios框架跨域只能用服务器代理跟CORS不能用jsonp 

- 12-18视频
- 服务器代理
```
const request = require('request');//跨域需要引入的模块 需要下载
let serverUrl='https://movie.douban.com/cinema/nowplaying/kunming/'//跨域的地址
app.use('/proxy', function(req, res) {//跨域需要设置的
    let url = serverUrl + req.url;
    req.pipe(request(url)).pipe(res);
  });
```



# express-session模块  框架  需要安装  插件 use 
```
//后台需要写的
app.use(session({
            secret: '12期',//签名可以随便写
            name: 'session_id',
            cookie: {maxAge: 10000},//存在时间
            resave: false,
            saveUninitialized: true,
            rolling:true //刷新cookie重置时间
        }))

```
后台在登录的时候，如果登录成功通过req.session.userinfo = user种一个cookie，再次请求接口的时候后台需要通过req.session.userinfo看下是否登录或者是否过期，通过req.session.destroy()清除,退出登录

# 原生的http（等于框架四步创建服务）
```
const http = require('http');//node_moduldes中的文件也不用路径就可以引入
//commonjs规范

/*
    request  请求   ajax  客户端发送的请求
    response 响应   {}
*/
let app = http.createServer(function(request,response){
     console.log('来了');
     console.log(request)
     post?user=2
     //注意排除'/favicon.ico'
    if(request.url !== '/favicon.ico'){
        let num = (/user=(\d)/.exec(request.url.split('?')[1]))[1];
        console.log(num);
        //记得设置头信息
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        if(num === '1'){
            response.write('{"name":"郝永旺"}');
        }else if(num === '0'){
            response.write('{"name":"李磊"}');
        }
        response.end();
    }
});

app.listen(80);

```
# 原生的fs文件系统模块（都有同步的） （框架没有fs模块）详见ysapp.js
- 读取文件：fs.readFile（原生的fs.readFile跟框架的静态文件路径是一个意思）
```
const http =require('http')//原生创建服务需要引入的 
const fs =require('fs')//引入文件系统模块

http.createServer(function(req,res){
    //req.url就是我们想要的请求地址 
    //读取文件异步用的回调函数
    // fs.readFile('./2.txt',function(error,data){
    //     //要读取的文件路径，回调函数两个参数（error，data）
    //     if(error){
    //     //如果error存在也就是没找到,做的事情
    //         console.log('失败');        
    //     }
    //     //data是对应文件的内容需要toString()
    //     res.write(data.toString())
    //     res.end()
        
    // })
    //同步的如果找不到就报错导致服务器挂了，一般需要用try catch包一下
  
    try {
    let url = req.url
    if(url=='/'){
        url='/index.html'
    }
    let data =fs.readFileSync('www/'+url)
    res.write(data.toString())
    res.end()
        
    } catch (error) {
    res.write('404')
    res.end()
    }
    
    
}).listen(88)
``` 
- 写文件
- 删除文件
- 创建目录
- fs.rename(oldPath, newPath, callback)//旧的路径，新的路径，回调函数
# 原生解决端口被占用的问题
```
let port=80
/*
    当服务器报错的时候触发
*/
app2.on('error',(e)=>{
    // console.log(e);
    //端口被占用的错误
    if(e.code === 'EADDRINUSE'){
        port ++;
        console.log(port)
       
    }
})

app2.listen(port)

```
# path
```
// console.log(__filename);//通过全局对象下的__filename能够获取当前文件的绝对路径（包含文件本身）
// console.log(__dirname);//表示当前执行脚本所在的目录（运行文件的根目录）,不包含文件本身

const path = require('path')//找路径的
console.log(path.join(__filename,'1.txt'));//join方法写啥是啥
console.log(path.resolve(__filename,'1.txt'));//自动帮我们找当前文件的路径和配置路径进行链接

```   
