const http =require('http')
let app = http.createServer(function(request,response){
    if(request.url!=='/favicon.ico'){
        let num = (/user=(\d)/.exec(request.url.splict('?'))[1])[1]
        if(num==='1'){
            response.write('{"name":"hyw"}')
        }
        if(num==='0'){
            response.write('{"name":"lilei"}')
        }
        response.end()
    }
})
app.listen(80)

