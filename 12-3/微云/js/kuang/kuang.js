const $fBox = $('#fBox')
const $kuang = $fBox.find('.kuang')
const { left: l, top: t } = $fBox[0].getBoundingClientRect()

$fBox.on('mousedown', function (ev) {
    if($(ev.target).closest('.file-item').length)return


    let disx = ev.pageX
    let disy = ev.pageY
    let $p1 = $folders.find('.file-item ')
    $fBox.on('mousemove', function (ev) {
        $kuang.show()
        let l1 = ev.pageX - disx > 0 ? disx - l : ev.pageX - l;
        let t1 = ev.pageY - disy > 0 ? disy - t : ev.pageY - t;
        $kuang.css({
            width: Math.abs(ev.pageX - disx) + 'px',
            height: Math.abs(ev.pageY - disy) + 'px',
            top: t1 + 'px',
            left: l1 + 'px'
        })


        $p1.each((i, item) => {
            let $i = $(item).find('i')
            let a = $(item).attr('did')
            // let b = data[a].pid
            if (tools.bong(item, $kuang[0])) {
                data[a].checked = true;
                $i.addClass('checked')
                $(item).addClass('active')


            } else {
                data[a].checked = false;
                $i.removeClass('checked')
                $(item).removeClass('active')
            }
        })
        if (list.every(item => item.checked)) {
            $checkedAll.addClass('checked')
        } else {
            $checkedAll.removeClass('checked')
        }
    })

    $(document).on('mouseup', function (ev) {

        $fBox.off('mousemove')
        $(document).off('mouseup')
        $kuang.hide()
        if (ev.pageX === disx && ev.pageY === disy) {
             $('#checkedAll').removeClass('checked')

            list.forEach(item => item.checked = false)
            $p1.each((i, item) => {
                let $i = $(item).find('i')
                $i.removeClass('checked')
                $(item).removeClass('active')
            })
        }
    })
    // return false

})