const http =require('http')
urlModel = require('url')//能够把url分割为路径，查询信息，hash....
qs = require('querystring'); //能够url序列化操作(转为对象)
const app2= http.createServer(function(req,res){
    //pathname接口（路径），query参数
   let {pathname,query}=urlModel.parse(req.url)
   console.log(pathname,qs.parse(query));
   
   
})

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

