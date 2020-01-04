//创建了一个长按事件
/*
使用：某个元素长安触发的事件
Element.changan (添加事件即可)
*/
Object.prototype.changan = function (cb) {
    let timer;
    this.onmousedown = function () {
        let time = new Date();
        timer = setInterval(() => {
            let now = new Date
            if (now - time > 1000) {
                //    console.log('长按');
                cb()
            }

        })

    }
    this.onmouseup = function () {
        clearInterval(timer)
    }
}



//获取某个元素绝对位置
/*
使用：
let f = new Tools
let {l,h} = f.position(div2)//传入一个元素即可
console.log(l,h);    
*/
class Tools {
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

//获取最短的li
/*
使用：minlis(lis) 传入对比的元素即可
返回值：let{minlis，index} = minlis(lis)
consloe.log(minlis,index) minlis长度最短的元素，index该元素对应的索引
*/


function minEle(lis) {
    let ary = [...lis].map(item => item.scrollHeight)
    let min = Math.min(...ary)
    let index = ary.findIndex(a => a === min)
    return {
        minlis: lis[index],//最短的元素
        index,//最短元素对应的索引
        min//最短的距离
    }
}
//函数防抖  把函数放到debounce()即可，再写上时间就可以达到防抖

window.onscroll = debounce(fn,200)
function fn (){
    console.log(1);
    
}

function debounce (cb,time){
 let timer
 return function (){
     if(timer){
         clearTimeout(timer)
     }
     timer=setTimeout(()=>{
        cb.call(this)//注意this
     },time)
 }
}
//函数节流
function throttling (cb,time){
    let prevtime = 0
    // let timer
    return function (){
        let nowtime = +new Date()
        
        
        if(nowtime-prevtime>=time){
            cb.call(this)//注意this
        }
        // else{
        //     clearTimeout(timer)
        //     if(+new Date-prevtime){
        //         timer = setTimeout(()=>{
        //             cb()
        //         },time)
        //     }
        // }
        prevtime = nowtime
    }

}
//谷歌跟火狐都兼容的滚轮事件
/*调用:addWheel(滚动触发的元素，function(){
    if(o){
        向上滚动触发的事件

    }else{
        向下滚动触发的事件

    }
})
*/

function addWheel(obj, cb) {

    if (obj.onmousewheel === null) {//说明有这个事件
         obj.onmousewheel = listen
    }else{
        obj.addEventListener('DOMMouseScroll',listen)
    }
    function listen(ev){
        let o =false//默认向下的
        if(ev.wheelDelta){
            o= ev.wheelDelta>0?true:false;
        }else{
            o = ev.datail<0?true:false;
        }
        cb.call(this,o)
    }
}
//碰撞
/*
使用：bong(元素一，元素二)
碰到就返回：true
没碰到就返回：false
*/
function bong(obj2,obj){
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
/*
js动画，使用：
box.onclick=function(){
           move({
               el:box,//运动的元素
               attr:{//运动的属性,带不带单位都可以
                   width:'300px',
                   height:300,
                   top:'300px',
                   left:500,
                   opacity:1
               },
               time:1000,//运动时间
               fx:'elasticOut',//运动模式（如下）
               cb:function(){
                //运动完可以接着调用
               }
           })
       }
*/
/*
* t : time 已过时间
* b : begin 起始值
* c : count 总的运动值
* d : duration 持续时间
*
* 曲线方程
*
* http://www.cnblogs.com/bluedream2009/archive/2010/06/19/1760909.html
* */

//Tween.linear();

var Tween = {
	linear: function (t, b, c, d){  //匀速
		return c*(t/d) + b;
	},
	easeIn: function(t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){  //加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){  //加加速曲线
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){  //减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	//弹性运动
	elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},     
	//自由落体  
	bounceOut: function(t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
}

//解构赋值,有配置走配置，没配置走默认
function move({
	el:obj=null,
	attr={}, //一个样式的运动属性
	time:d=500, //默认为500毫秒
	cb=function(){},
	fx='linear'
}){
	var json = {}; //存属性和初始值和目标点的对象
	var t = 0;

	for(var key in attr){
		if(attr.hasOwnProperty(key)){
			var b = parseFloat(getComputedStyle(obj)[key]); //带单位
			json[key] = {
				b,
				c:parseFloat(attr[key]) - b  //总长度 - 开始的位置 = 应该走的步长
			}
		}
	}

	(function start(){
		obj.timer = requestAnimationFrame(function (){
		  
			start();
			t += 16.7;//每16.7毫秒走了多少时间
			//如果当前的时间大于等于总时间，那么就让当前时间等于总时间,为了让停下来的距离和设置距离一致
			if(t >= d){
				t = d;
			}
			
			for(let key in json){
				let {c,b} = json[key];
				if(key === 'opacity'){
					obj.style[key] = Tween[fx](t,b, c, d);
				}else{
					obj.style[key] = Tween[fx](t,b, c, d) + 'px';
				}
					 
			}			
			if(t === d){
				cancelAnimationFrame(obj.timer);
				cb();
				console.log(obj.timer);
			}
		});
	})()
}



