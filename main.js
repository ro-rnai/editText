var resize=(function (){
	var txt=document.getElementById("textEditor");
	return function ()
	{
		var cs=getComputedStyle(txt);
		var dH=txt.offsetHeight-cs.height.match(/(-?[0-9]+)/)[1]+txt.offsetTop+10;
		txt.setAttribute("style","width:100%;height:"+(window.innerHeight-dH)+"px");
	}
})();
var save=(function (){
	var txt=document.getElementById("textEditor");
	return function ()
	{
		var data="data:text/plain;charset=UTF-8;base64,"+txt.value.toUTF8Array().encodeBase64();
		var a=document.createElement("a");
		document.body.appendChild(a);
		a.href=data;
		a.download="new.txt";
		a.click();
		document.body.removeChild(a);
	}
})();
(function (){
	var bt=document.getElementById("saveButton");
	var txt=document.getElementById("textEditor");
	bt.addEventListener("click",save);
	window.addEventListener("resize",resize);
	resize();
	txt.addEventListener("keydown",tabInput)
})();
