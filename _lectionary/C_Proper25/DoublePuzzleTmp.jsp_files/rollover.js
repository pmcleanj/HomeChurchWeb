function _navOver(img) {
	var name=img.name;
	var s = eval(name + "_on.src");
	document[name].src = s;	
}
function _navOut(img) {
	var name=img.name;
	var s = eval(name + "_off.src");
	document[name].src = s;
}
if(document.images) {
	for(var j=0;j<document.images.length;j++){
		var i=document.images[j];
		if(!i.name) continue;
		var s=i.src;
		if(s.substring(s.length-8)=='_off.gif'){
			var n=i.name;
			eval('var '+n+'_off=new Image()');
			eval(n+'_off.src="'+s+'"');
			eval('var '+n+'_on=new Image()');
			eval(n+'_on.src="'+s.substring(0,s.length-8)+'_on.gif"');
			i.onmouseover=function(){_navOver(this)};
			i.onmouseout=function(){_navOut(this)};
		}
	}
}
