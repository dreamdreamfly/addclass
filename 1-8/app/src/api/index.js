import axios from 'axios'

const instance =axios.create()
instance.interceptors.request.use(config => {
// Do something before request is sent
if(localStorage.getItem('token')){
    config.headers.authorization =localStorage.getItem('token')
}
return config;
},error => {
// Do something with request error
return Promise.reject(error);
});


instance.interceptors.response.use(config => {
// Do something before response is sent
// console.log(config.data.token);
//每次相应的时候中一个新的token
if(config.data.token){
    localStorage.setItem('token',config.data.token)
}


return config.data;
},error => {
// Do something with response error
return Promise.reject(error);
});


export {instance}