//将样式css放到本地存储，下次刷新页面不再需要请求，一个外联都是一个请求，href src等

let style = localStorage.getItem('style')
if(!style){
    fetch('./index.css').then(a=>a.text()).then(b=>{
    let hd =document.createElement('style');
    hd.innerHTML=b;
    let head =document.querySelector('head')
    head.appendChild(hd)
    localStorage.setItem('style',b)
    })
}else{
    let sty =document.createElement('style')
    sty.innerHTML =style
    document.querySelector('head').appendChild(sty)
    }
const lis =document.querySelectorAll('#ul1 li')
let ary =JSON.parse(localStorage.getItem('gwc'))||[]
render(ary)
lis.forEach(item=>{
    item.onclick=function(){
        
        if(!ary.includes(this.innerText)){
            ary.push(this.innerText)
            localStorage.setItem('gwc',JSON.stringify(ary))//设置本地存储的时候，会默认转字符串（cookie也会有）    
            render(ary)      
        }        
       
    }
})
//只要修改了localStorage值，兄弟页面就会触发这个事件
window.onstorage = function(){     
    ary =JSON.parse(localStorage.getItem('gwc')) || [] //把最新的数据赋值给ary
    render(ary)
}

function render (){
    let html =ary.map(item=>`<li>${item}</li>`).join('')
    ul2.innerHTML=html
}
//删除
ul2.onclick = function(ev){
    if(ev.target.tagName==='LI'){
      ary=ary.filter(item=>item!== ev.target.innerText)
      render(ary)//删除本页面的
      localStorage.setItem('gwc',JSON.stringify(ary))//通过改变localStorage来触发兄弟页面
    }
}