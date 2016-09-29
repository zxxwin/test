var result;
var str;
function numOperat (numoperat) {
	str=document.getElementById('nummessege');
	str.value+=numoperat;
}
function Clear(){
	str=document.getElementById('nummessege');
	str.value="";
}
function equalto(){
	str=document.getElementById('nummessege');
	str.value=eval(str.value);
}
function display(){
	var Calc=document.getElementById('calc');
	Calc.style.display="block";
}
function Hide(){
	var Calc=document.getElementById('calc');
	Calc.style.display="none";
}