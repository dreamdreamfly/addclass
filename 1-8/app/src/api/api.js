import {instance} from './index'

export const get=()=>instance.get('http://localhost/get')
export const post=(uname)=>instance.post('http://localhost/login',{uname})
export const islogin=()=>instance.post('http://localhost/islogin').then(data=>{
    if(data.code==0){
        return true
    }
    return false
})