let tools = (function(){
    //通过父级的id，去找子级的数据
    function getChild(data,id=0){
        if(!data[id]) return null;
        let ary =Object.keys(data);
        return ary.filter(item=>data[item].pid === id).map(item=>data[item])};
    //通过id，找一个父级的数据
    function getParent(id){
        if(!data[id].pid==='-1')return null
        return data[data[id].pid]
    }
    //通过id，找所有的祖先级的数据(包括自己的数据)
    function getParents(id){
        let pdata = getParent(id)
        let ary =[data[id]]
        while(pdata){
            ary.unshift(pdata)
            pdata=getParent(pdata.id)
        }
        return ary
    }
    function bong(obj,obj2){
        let {left:l,top:t,bottom:b,right:r} = obj.getBoundingClientRect();
        let {left:l2,top:t2,bottom:b2,right:r2} = obj2.getBoundingClientRect();
        if(r < l2 || b < t2 || l > r2 || t > b2){
            // console.log('没碰到');
            return false;
        }else{
            // console.log('碰到');
            return true;
        }
    }
    return {
        getChild,
        getParents,
        bong
    }
})()