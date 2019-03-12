var zhanghaobox = document.getElementById("zhanghao-box");
var saomabox = document.getElementById("saoma-box");
var saoma = document.getElementById("saoma");
var zhanghao = document.getElementById("zhanghao");
var username = document.getElementById("username");
var pwd = document.getElementById("pwd");
var yanzhengbox = document.getElementById("yanzhengbox");
var yanzheng = document.getElementById("yanzheng");
var yanzhengma = document.getElementById("yanzhengma");
var err = document.getElementById("err");
var errcon = document.getElementById("errcon");
var loginbtn = document.getElementById("loginbtn");
//账号登录
function denglu1(){
	zhanghaobox.style.display = "block";
	saomabox.style.display = "none";
	zhanghao.style.color= "#f56600";
	saoma.style.color= "#666";
}
//扫码登录
function denglu2(){
	zhanghaobox.style.display = "none";
	saomabox.style.display = "block";
	zhanghao.style.color= "#666";
	saoma.style.color= "#f56600";
}
fn();
//生成验证码
function fn(){
	var a = parseInt(Math.random()*10);
	var b = parseInt(Math.random()*10);
	var c = String.fromCharCode(Math.round(Math.random()*25)+65);
	var d = String.fromCharCode(Math.round(Math.random()*25)+65);
	yanzhengma.innerHTML = a+""+b+c+d;
}
//点击登录按钮
function dianjidl(){
	//判断用户名
	if(username.value==""){
		username.style.border = "solid 1px #ef5b00";
		pwd.style.border = "solid 1px #ccc";
		err.style.display = "block";
		errcon.innerHTML = "请输入帐号";
	}else if(pwd.value==""){
		username.style.border = "solid 1px #ccc";
		pwd.style.border = "solid 1px #ef5b00";
		err.style.display = "block";
		errcon.innerHTML = "请输入密码";
	}else{
		//验证码出现
		yanzhengbox.style.display = "block";
		//忽略大小写
		console.log(yanzheng.value.toUpperCase()+","+yanzhengma.innerHTML.toUpperCase())
		if(yanzheng.value.toUpperCase()!=yanzhengma.innerHTML.toUpperCase()){
			yanzheng.style.border = "solid 1px #ef5b00";
			err.style.display = "block";
			errcon.innerHTML = "验证码不正确！";
			fn();
		}else{
			//正确
			loginbtn.href = "https://www.baidu.com";
		}
		if(yanzheng.value==""){
			yanzheng.style.border = "solid 1px #ef5b00";
			err.style.display = "block";
			errcon.innerHTML = "请输入验证码";
		}
	}
}
//input事件，该事件在 <input> 或 <textarea> 元素的值发生改变时触发。
function myinput(a){
	a.style.border= "solid 1px #ccc";
	err.style.display = "none";
	
}
