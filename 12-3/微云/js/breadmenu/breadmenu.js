/*
<div class="bread-nav" onselectstart="return false;">
        <!-- 这个是操作的东西 -->
    <!-- <a href="javascript">微云</a>
	<span>我的文档</span> -->
                    </div>
*/
const {getParents} =tools
const $bread_nav = $('.bread-nav')
//通过id来渲染面包屑
function creatMenu (id){
    $bread_nav.html('')
    let pary = getParents(id)
    
    pary.forEach((item,i,all)=>{
        if(i===all.length-1){
            let $span  = $(`<span>${item.title}</span>`)

            $bread_nav.append($span)
        }
        else{
            let $aa  = $(`<a href="javascript:void(0);">${item.title}</a>`)
            $aa.click(function(){
                tools.getChild(data,id).forEach(item=>item.checked=false)
                render(item.id)
                creatMenu(item.id)
              
                
            })
            $bread_nav.append($aa)
            
        }
    }

    )
    
}
creatMenu(0)

