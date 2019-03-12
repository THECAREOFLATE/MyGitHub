function getStyleAttr(obj,attr) {
	if(window.getComputedStyle) { //支持IE9+, 谷歌, 火狐..获取页面元素样式
	return getComputedStyle(obj, null)[attr];
	//var style = window.getComputedStyle("元素", "伪类");
	}else{
		return obj.currentStyle[attr]; //支持IE8-
    }
}
//obj 对象
//attr 属性
//target 目标值
//s 定时器时间
//fn 回调函数
function move(obj,attr,target,s,fn){
	//关闭定时器
	clearInterval(obj.timer);
	if(attr=="opacity"){
		target*=100;
	}
	//开始定时器
	obj.timer = setInterval(function(){
		//1.获取obj的当前值
		if(attr=="opacity"){
			var start = parseInt(getStyleAttr(obj,attr)*100);
		}else{
			var start = parseInt(getStyleAttr(obj,attr));
		}
		//2.给个速度
		var speed = (target-start)/7 ;
		speed = speed>0? Math.ceil(speed):Math.floor(speed);
		
		//3.运动
		if(start==target){
			clearInterval(obj.timer);
			//回调函数
			if(fn){
				fn();
			}
		}else{
			if(attr=="opacity"){
				obj.style.opacity = (start+speed)/100;
				obj.style.filter="'"+"alpha(opacity="+start+speed+")"+"'";
				obj.style.filter ="alpha(opacity="+start+speed+")";
			}else{
				obj.style[attr] = start+speed+"px";
			}
		}
	},s)
}
