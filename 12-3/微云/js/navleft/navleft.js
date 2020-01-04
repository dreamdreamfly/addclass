const $del = $('#del')
const $create = $('#create')
const $rename = $('#rename')
const $remove = $('#remove')
const $model_list = $('#model_list')
let that =null

//新建键
$create.click(function () {
    let ary = list.map(item => item.title)
    let a = $bread_nav.find('span').text()
    let b = (Object.values(data)).filter(item => item.title === a)[0].id
    if (!tools.getChild(data, b).length) {
        $f_empty.hide();
    }
    let $wenjian = $(`<div class="file-item active">
    <img src="img/folder-b.png" alt="" />
    <input type="text" class="editor"/>
    <i class="_checked"></i>
    </div>`)
    let $input = $wenjian.find('input')
    $input.css('display', 'block')
    $folders.append($wenjian)
    $input.select()


    $input.blur(function () {
        if ($input.val() === '') {
            console.log('请输入文件名');
            $input.select()

        } else if (ary.includes($input.val())) {
            console.log('文件名已存在，请重新输入');
            $input.select()

        } else {
            let key = + new Date
            data[key] = {
                "id": key,
                "pid": b,
                "title": $input.val(),
                "checked": false

            }

            render(b)


        };


    })
    //<span class="folder-name">JS基础课程</span>



})



//删除键
$del.click(function () {
    let shanchu = list.filter(item => item.checked)
    if (!shanchu.length) {
        console.log('请选择要删除的文件');
        return
    }
    shanchu.forEach(item => {
        delete data[item.id];
        render(item.pid)
    }
    )
    $checkedAll.removeClass('checked')
})
//重命名键
$rename.click(function () {
    let chongming = list.filter(item => item.checked)
    if (chongming.length === 1) {
        let ary = list.map(item => item.title)
        let pid = chongming[0].pid;
        let id = chongming[0].id
        let $span = $folders.find('.active').find('span')
        let $cmmhtml = $span.html()
        $span.hide()
        let $input = $folders.find('.active').find('input')
        $input.css('display', 'block')
        $input.select()
        $input.blur(function () {
            if (chongming.length === 1) {
                if ($input.val() === '') {
                    console.log('请输入内容');
                    $input.val($cmmhtml)
                    $input.select()
                }
                else if ($cmmhtml===$input.val()) {
                    data[id].checked = false
                    render(pid)

                }
                else {
                    if (!ary.includes($input.val())) {
                        data[id].title = $input.val()
                        data[id].checked = false
                        render(pid)
                    } else {
                        console.log('文件名已存在，请从新输入');
                        $input.val($cmmhtml)
                        $input.select()
                    }
                }
            }
        })
    }
    else if (chongming.length === 0) {
        console.log('请选择要修改的文件');
    } else {
        console.log('请选择一个要修改的文件');
    }
})

//移动到

let $ok = $('.modal-tree').find('.ok')
let $cancel = $('.modal-tree').find('.cancel')
let $icon_close = $('.modal-tree').find('.icon_close')
let okcode= null;
function createModelTree(num){
    let ary = tools.getChild(data,num)
    if(!ary.length) return
    let $ul=$('<ul style="padding-left:5px;"></ul>')
    let redata = list.filter(item=>item.checked)
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
            if(redata.some(d=>d.id===item.id)){
                okcode = 'error'
                return
            }else{
                okcode = item.id //框里选中的id
            } 
            if(that){
                that.css('background','none')
            } 
            $(this).find('span').css('background','#ccc')
            that = $(this).find('span')

           


            if(this.children[0].classList.toggle('open')){                
                $(this).append(createModelTree(item.id))
            }else{
                $(this).find('ul').remove()
            }

            
           
            return false 
        })
    })
    return $ul
    
    

}
$remove.off().click(function(){
    
    $model_list.children().find('ul').remove()
    let redata = list.filter(item=>item.checked)
    if(redata.length){
        $model_list.children().append(createModelTree(0))
        $('.modal-tree').show()
    }else{
        console.log('请选择要移动的文件夹');
        
    }
    
    ;
    $ok.off().click(function(){
        if(okcode==='error'){
            console.log('非法操作'); 
            return
            
        }
       
        let id = redata[0].pid
        redata.forEach(item=>{
            item.pid=okcode
            item.checked =false
            
        })
        $('.modal-tree').hide()
        render(id)
        $tree_menu.children().children().find('ul').remove()
        $tree_menu.children().children().append(createTree(0))
       
        if(!tools.getChild(data,id).length){
            $checkedAll.removeClass('checked')
        }
    })
    
})

$cancel.click(function(){
    $('.modal-tree').hide()
})
$icon_close.click(function(){
    $('.modal-tree').hide()
})
