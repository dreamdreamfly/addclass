const express =require('express');
const router =express.Router();//返回值一会导出用
/*
router1的跟不是localhost而是dl.js的跟
*/
router.get('/',(req,res)=>{
    let {query,ary} = req
    let o =ary.find(ele=>ele.name==query.user)
    let obj ={}  
   if(o){
       obj.code=0
       obj.msg='用户名已存在'
   }else{
    obj.code=1
    obj.msg='用户名可用'
    }
    res.json(obj)
});
    module.exports =router//导出路由