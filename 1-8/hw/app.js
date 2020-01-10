const express =require('express')
const bodyParser=require('body-parser')
const jwt=require('jsonwebtoken')
const app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


const secret ='zf'

let ary =['lc','hyw']
app.get('/get',(req,res)=>{
    res.send({
        code:0,
        msg:'成功'
    })
})

app.post('/login',(req,res)=>{
   const {uname,pass}=req.body
   if(ary.includes(uname)){
    res.send({
        code:0,
        msg:'登录成功',
        //登录成功创建token
        token:jwt.sign({user:uname},secret,{
            expiresIn:20//以秒为单位
    })
   
    })
   }else{
       res.send({
           code:1,
           msg:'失败'
       })
   }
})
//前端token一般不是通过body发送的，而是通过headers传输的

app.post('/islogin',(req,res)=>{
    //authorization是可变的，也有叫token
  const token=  req.headers.authorization
if(token){
    jwt.verify(token,secret,(error)=>{
        if(error){
            res.send({
                code:1,
                msg:'失效'
            })
            return
        }
        res.send({
            code:0,
            msg:'有权限',
            //每次请求验证成功以后，都发一个新的令牌给前端，保证令牌持久化操作
            token:jwt.sign({user:uname},secret,{
                expiresIn:20//以秒为单位

        })
    })

}else{
    res.send({
        code:2,
        msg:'未登录'
    })
  }
  
})
// const secret ='zf'
// const jwt=require('jsonwebtoken')
// const token =jwt.sign({user:'hyw'},secret,{
//     expiresIn:20//以秒为单位
// })
// //token解密
// jwt.verify(token,secret,(error,data)=>{
//     if(error){
//         console.log('失败');       
//         return 
//     }
//     console.log(data);
    
// })
// console.log(token);

//jwt->jsonwebtoken token模块

app.listen(80)
