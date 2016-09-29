window.onload=function(){
	function id(value) {return document.getElementById(value);}
//*****图片轮播：*****//
	var SliP=document.getElementsByName('slide-picture');
	var SliL=document.getElementsByName('slide-li');
	var interval=3000;
	var itv=setInterval(change,interval);
	var curIndex=1;
	//var iNow=0;
	function change () {
		if(curIndex==SliP.length){
			curIndex=0;
		}else{
			move(curIndex);
			curIndex++;
		}
	}
	function move(index_picture){
		if(index_picture==SliP.length){
			index_picture=0;
		}
		/*if(index<0){
			index=SSliPli.length-1;
		}*/
		for(var n=0;n<SliP.length;n++){
			SliP[n].style.display='none';
		}
		SliP[index_picture].style.display='block';
		for(var n=0;n<SliL.length;n++){
			SliL[n].style.background='#3e3e3e';
		}
		SliL[index_picture].style.background='#c81623';
	}
//*****鼠标悬浮于图片时，暂停轮播：*****//
	id("slidePicture").onmouseover=function(){clearInterval(itv);};
	id("slidePicture").onmouseout=function(){itv=setInterval(change,interval)};

//*****鼠标悬浮于序号时，显示对应图片：*****//
	/*id("slideButton").onmouseover=function(){clearInterval(itv);diplay_this();};
	id("slideButton").onmouseout=function(){itv=setInterval(change,interval);};*/
	/*function getli_index(){
		for (var i=0;i<SliL.length-1;i++){
			SliL[i].onmouseover=function(){alert(i);return i;}
		}
	}
	function diplay_this(){
		move(getli_index());
	}*/
}

	function barDisplay(){
	var bar=document.getElementById('l1');
	var li=document.getElementById('dropdownBar1');
	var link=document.getElementById('dropdownBar1').getElementsByTagName('a');
		bar.style.display='block';
		li.style.background='#f7f7f7';
		link[0].style.color='#c81623';
	}
	function barHide(){
	var bar=document.getElementById('l1');
	var li=document.getElementById('dropdownBar1');
	var link=document.getElementById('dropdownBar1').getElementsByTagName('a');
		bar.style.display='none';
		li.style.background='#c81623';
		link[0].style.color='white';
	}
