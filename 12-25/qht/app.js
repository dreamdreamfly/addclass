const express =require('express')
const app=express()
const bp =require('body-parser')
const multer =require('multer')//上传模块
const session = require("express-session");//引入session模块
const request = require('request');//跨域需要引入的模块

let serverUrl='https://movie.douban.com/cinema/nowplaying/kunming/'//跨域的地址
app.use('/proxy', function(req, res) {//跨域需要设置的
    let url = serverUrl + req.url;
    req.pipe(request(url)).pipe(res);
  });
app.use(express.static('www'))//静态文件路径
app.use(bp.json())//解决了post可以用对象
app.use(bp.urlencoded({extended:false}))//post请求方式需要用的
app.use(multer({dest:'uploads/'}).single('filename'))
        //文件上传路径                         字段key值
        app.use(session({
            secret: '12期',
            name: 'session_id',
            cookie: {maxAge: 10000},
            resave: false,
            saveUninitialized: true,
            rolling:true //刷新cookie重置时间
        }))
let ary =[{
    name:'hyw',
    pw:123
},
{
    name:'ydz',
    pw:321
},
{
    name:'郝永旺',
    pw:321
}]

//抽离后可以找到主页的变量
app.use('*',(req,res,next)=>{
    req.ary =ary
    next()//上面的步骤完成，下面继续执行
})
app.use('/dl',require('./routers/data/dl'))
app.use('/mm',require('./routers/user/mm'))
app.use('/upload',require('./routers/upload/upload'))
app.get('/islogin',(req,res)=>{
    // console.log(req.session.userinfo);
    
    if(req.session.userinfo){ //登录过
        res.json({
            code:0,
            msg:'欢迎回来',
            
        })
    }else{
        res.json({
            code:1,
            msg:'没有登录'
        })
    }
    // console.log(req.session.userinfo);
});


app.listen(80)