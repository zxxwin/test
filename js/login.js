function check () {
	var count=document.getElementById('count').value;
	var passWord=document.getElementById('password').value;
	var infoStyle=document.getElementById('info');
	if(count==''){
		infoStyle.className="warm";
		infoStyle.innerHTML="请完整输入账号或密码";
		return false;
	}
	if(passWord==''){
		infoStyle.className="warm";
		infoStyle.innerHTML="请完整输入账号或密码";
		return false;
	}
	var isAdmin = count == "admin" && passWord =="123456"; 
	if(isAdmin)
	{
		alert("Welcome "+count);
		//return false;
	}
	else{		
		infoStyle.className="warm";
		infoStyle.innerHTML="用户名或密码错误";
		return false;
	}
}