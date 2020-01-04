const http =require('http')//原生创建服务需要引入的 
const fs =require('fs')//引入文件系统模块

//写文件如果已经存在的话会覆盖之前的内容
fs.writeFile('www。。/2.html','3445',function(error){
             //文件路径，文件内容，写文件失败处理的事情
    if(error){
        console.log('失败');        
    }
})
//删除
fs.unlink('www/2.txt', function(err){
    //删除的路径，回调函数删除失败处理的事情
    if(err){
        console.log('失败');       
    }
    console.log('成功');    
})
//创目录
fs.mkdir('./h',function(err){
    //创目录路径，回调函数创目录失败处理的事情
 if(err){
     console.log('失败');
     
 }
})

//读文件
http.createServer(function(req,res){   
    //req.url就是我们想要的请求地址 
    //异步读取文件   
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
    let sb =fs.readFileSync('www/404.html')
    res.write(sb.toString())
    res.end()
    }
    
    
}).listen(88)