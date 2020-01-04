const $folders = $('.folders')//放文件夹的盒子
const $f_empty =$('.f-empty')
const $checkedAll = $('#checkedAll')

let list =null
//传入id就能在放文件夹的盒子展示他的子级
function render(num=0){
    $folders.html('')
    let d = tools.getChild(data,num)  
    list = d   
    $checkedAll.off().click(function(){  
      if(d.length){
        d.forEach(item=>item.checked=!every)
        render(num)
      }        
    })
       
    if(!d.length){
        $f_empty.show(); 
        return              
       
    }else{
      $f_empty.hide();
    }
            
   
    let every=true;

    // $create.click(function(){
    //   console.log(num);
      
    // })
    $.each(d,(i,item)=>{
        if(!item.checked){
            every =false;
            $checkedAll.removeClass('checked')
        }
        let {id,title,checked}= item
        let $folder= $(`<div class="file-item ${checked?"active":''}" did="${id}">
        <img src="img/folder-b.png" alt="" />
        <span class="folder-name">${title}</span>
        <input type="text" value="${title}" class="editor"/>
        <i class=${checked?"checked":''}></i>
      </div>`)

      let $img = $folder.find('img')
      let $i = $folder.find('i')
      $i.click(function(){         
        data[id].checked = !data[id].checked
        
        
        render(num)
      })
      $img.dblclick(function(){  
        
        $checkedAll.removeClass('checked') 
        d.forEach(item=>item.checked=false)       
          render($(this).parent().attr('did')*1 )  
          creatMenu($(this).parent().attr('did')*1)
      })
      $folders.append($folder)
    })
   
    if(every){
        $checkedAll.addClass('checked')
    }
}
render(0)





