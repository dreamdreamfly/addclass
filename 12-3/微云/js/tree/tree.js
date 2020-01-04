

/*

function createTree(d){

    // 子集的数据tools.getChild(data,0)
    
        
        let temp = ''
        d.forEach(item => {
            let len = tools.getChild(data,item.id);           
            temp+=                    
    `<li>
        <div class="${len.length?"tree-title tree-ico ":"tree-title tree-ico-none"}">
            <span class="${len.length?'':'open'}"><i></i>${item.title}</span>
        </div>
        ${len.length?`<ul>${createTree(len)}</ul>`:''}
    </li>`           
        })
        
        return temp   
}

$tree_menu.find('div').append(createTree(tools.getChild(data,0)))
*/

let $tree_menu = $('.tree-menu')
function createTree(num){
    let ary = tools.getChild(data,num)
    if(!ary.length) return
    let $ul=$('<ul style="padding-left:5px;"></ul>')
    ary.forEach(item=>{
        let $li = $(
        `<li>
            <div class="tree-title tree-ico">
                <span><i></i>${item.title}</span>
            </div>
        </li>`)
        if(!tools.getChild(data,item.id).length){
            $li.find('i').css('background','none')
        }
        $ul.append($li)
        $li.click(function(){   
            if(this.children[0].classList.toggle('open')){
                $(this).append(createTree(item.id))
                render(item.id)
                creatMenu (item.id)
            }else{
                $(this).find('ul').remove()
            }        
           
            return false 
        })
    })
    return $ul
    
    

}
$tree_menu.children().children().append(createTree(0))



