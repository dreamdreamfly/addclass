const express =require('express');
let router =express();

router.post('/',(req,res)=>{
 console.log(req.file);
 
})
module.exports =router
