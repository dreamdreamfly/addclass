class Tools {
    /*
    let f = new Tools
    let { l, h } = f.position(div2)
    console.log(l, h);
    position(元素)
    返回值是一个对象｛
    l:left，
    t:top
    
    ｝
    */
    position(nowele) {
        let h = 0
        let l = 0
        let nl = nowele.clientLeft
        let h1 = nowele.clientTop
        while (nowele) {
            l += (nowele.clientLeft + nowele.offsetLeft)
            h += (nowele.clientTop + nowele.offsetTop)
            nowele = nowele.offsetParent
        }
        l = l - nl
        h = h - h1
        return { l, h }
    }
}

