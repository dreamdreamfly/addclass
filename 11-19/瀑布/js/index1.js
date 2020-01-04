const lis = document.querySelectorAll('.body li')//获取的是类数组
const bh = document.querySelector('.head')
/*
问题：
当滚轮的时候，window.onscroll触发的次数非常多如果是触底去请求服务器，那么会在同一时间请求若干次。这样大大增加了服务器的压力，也会降低了用户的体验

解决方案：
第一个（停下来在触发）：防抖
当频率很高触发事件的时候都不执行事件函数中的代码，只有停下来的时候在执行
第二个（降低频率）：节流
每隔固定时间再加载图片，比如每隔200s
*/

function minEle (lis){
  let  ary = [...lis].map(item=>item.scrollHeight)
  let min = Math.min(...ary)
  let index = ary.findIndex(a=>a===min)
 return {
     minlis:lis[index],//最短的元素
     index,//最短元素对应的索引
     min//最短的距离是多少
 }    
}


function render(){
    fetch('../data.json').then(a=>a.json()).then(data=>{  
           let num = 100
        data.forEach((item,i)=>{        
           let {pic,author,desc} =item
            let {minlis,min} = minEle(lis)       
            let div =document.createElement('div')
            div.className = 'img_box'
            let img = document.createElement('img')
            img.src=pic
            div.append(img)
            let p1 = document.createElement('p')
            p1.className = 'desc'
            p1.innerText = desc
            div.append(p1)
            let p2 = document.createElement('p')
            p2.className = 'author'
            p2.innerText = author
            div.append(p2)
            minlis.append(div)
            setTimeout(()=>{
                img.style.opacity = 1
            },num*i)  

        })
       
        
    })
}
render()


let ih = window.innerHeight//可视区的高度
let b = bh.scrollHeight//顶部距离
function debounce (cb,time){
    let timer;
    return function (){
        if(timer){
            clearTimeout(timer)
        }         
          timer = setTimeout(() => {
            cb()
          }, time);
      }                    
}
// function throttling (cb,time){
//     let prevtime = 0
//     let timer
//     return function (){
//         let nowtime = +new Date()
//         console.log(nowtime-prevtime);
        
//         if(nowtime-prevtime>=time){
//             cb()
//         }
//         else{
//             clearTimeout(timer)
//             if(+new Date-prevtime){
//                 timer = setTimeout(()=>{
//                     cb()
//                 },time)
//             }
//         }
//         prevtime = nowtime
//     }

// }
window.onscroll =
// throttling(fn,200)
 debounce (fn,200) 
function fn (){
    console.log(1);
    
    let {min} = minEle(lis) //最短的距离是多少   
    let scroll = window.pageYOffset//滚动条的距离
    if(ih+scroll>=min+b){
        console.log('触底');
        render()
        
    }
}

