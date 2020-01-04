const express =require('express');
let router =express();

router.post('/',(req,res)=>{
    let {ary}=req
    let obj1 ={}
    let {user,pw}=req.body
    if(/^[a-zA-Z]\w{6,9}$/.test(pw)){
        obj1.code=1
        obj1.msg='恭喜注册成功'
        ary.push({
            name:user,
            pw
        })
        req.session.userinfo = user;
        console.log(1);
        

    }else{
        obj1.code=0
        obj1.msg='密码等级太低'
    }
    
    res.send(obj1)
    
})
module.exports =router
