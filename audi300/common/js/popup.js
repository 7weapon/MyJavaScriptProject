//弹出页面背景半透明======================================================================
var isIe=(document.all)?true:false;

//弹出方法
function showMsgBox(divID,wWidth,wHeight){
	var bWidth= parseInt(document.documentElement.scrollWidth);
	var bHeight=parseInt(document.documentElement.scrollHeight);
	
	var ddHeight = document.documentElement.clientHeight;
	
	var sWidth= parseInt((document.documentElement.scrollWidth - wWidth) / 2);
	var sHeight=parseInt(document.body.scrollTop + document.documentElement.scrollTop + (document.documentElement.clientHeight-wHeight) / 2);
	
	var back=document.createElement("div");
	var styleStr;
	back.id="back";
	if(bHeight < ddHeight){
		styleStr="top:0px;left:0px;position:absolute;z-index:9999;background:#000;width:"+bWidth+"px;height:"+ddHeight+"px;";
	}else {
		styleStr="top:0px;left:0px;position:absolute;z-index:9999;background:#000;width:"+bWidth+"px;height:"+bHeight+"px;";
	}
	
	styleStr+=(isIe)?"filter:alpha(opacity=70);":"opacity:0.7;";
	back.style.cssText=styleStr;
//	back.innerHTML="<div style=width:"+bWidth+"px;height:"+bHeight+"px; onclick=closeWindow(\'"+divID+"\');></div>";
	back.innerHTML="<div style=width:"+bWidth+"px;height:"+bHeight+"px;></div>";
	if(!document.getElementById('back'))
	document.body.appendChild(back);
	var mesW=document.getElementById(divID);
  
	//styleStr="left:"+sWidth+"px;top:"+sHeight+"px;width:"+wWidth+"px;position:absolute;z-index:100;display:block;";
	styleStr="left:"+sWidth+"px;top:"+sHeight+"px;width:"+wWidth+"px;position:absolute;z-index:9999;display:block;";
	mesW.style.cssText=styleStr;
	document.body.appendChild(mesW);
}

function showBackground(obj,endInt){
	obj.filters.alpha.opacity+=1;
	if(obj.filters.alpha.opacity<endInt)
	{
		setTimeout(function(){showBackground(obj,endInt)},8);
	}
}
//关闭窗口
function closeWindow(Obj){
	if(document.getElementById('back')!=null)
	{
		document.getElementById('back').parentNode.removeChild(document.getElementById('back'));
	}
	
	document.getElementById(Obj).style.display="none";
}