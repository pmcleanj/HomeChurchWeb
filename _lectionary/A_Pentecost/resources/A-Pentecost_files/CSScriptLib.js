// -- Adobe GoLive JavaScript Library
// -- Global Functions
function CSScriptInit() {
if(typeof(skipPage) != "undefined") { if(skipPage) return; }
idxArray = new Array;
for(var i=0;i<CSInit.length;i++)
	idxArray[i] = i;
CSAction2(CSInit, idxArray);
}
CSInit = new Array;
CSExit = new Array;
CSStopExecution=false;
function CSAction(array) {return CSAction2(CSAct, array);}
function CSAction2(fct, array) { 
	var result;
	for (var i=0;i<array.length;i++) {
		if(CSStopExecution) return false; 
		var aa = fct[array[i]];
		if (aa == null) return false;
		var ta = new Array;
		for(var j=1;j<aa.length;j++) {
			if((aa[j]!=null)&&(typeof(aa[j])=="object")&&(aa[j].length==2)){
				if(aa[j][0]=="VAR"){ta[j]=CSStateArray[aa[j][1]];}
				else{if(aa[j][0]=="ACT"){ta[j]=CSAction(new Array(new String(aa[j][1])));}
				else ta[j]=aa[j];}
			} else ta[j]=aa[j];
		}			
		result=aa[0](ta);
	}
	return result;
}
CSAct = new Object;
function CSClickReturn () {
	var bAgent = window.navigator.userAgent; 
	var bAppName = window.navigator.appName;
	if ((bAppName.indexOf("Explorer") >= 0) && (bAgent.indexOf("Mozilla/3") >= 0) && (bAgent.indexOf("Mac") >= 0))
		return true; // dont follow link
	else return false; // dont follow link
}
// -- Action Functions
// DatePage.action v1.4.1 - January, 2005
// © 1999, Walter Blady
// All rights reserved
var DPisIE3 = navigator.appVersion.indexOf("MSIE 3") != -1;
var DPisIE = navigator.appVersion.indexOf("MSIE") != -1;
var DPW3C = document.getElementById ? true : false;
var DPNewWind, DPAction;
function WBDatePage(action) {
	if (DPVersion()) {
		DPAction = action;
		var thisDate = new Date(), fromDate, testDate, duration;
		var thisHour = thisDate.getHours();
		var thisMinute = thisDate.getMinutes();
		var thisSecond = thisDate.getSeconds();
		thisDate = Date.parse(thisDate);
		var url = "";
		for (var i = 17; i < 53; i = i + 3) {
			if (action[i] != "" && action[i+2].indexOf("Reference!") == -1 && action[i+2] != "#") {
				testDate = action[i].indexOf(":") == -1 ? eval(new Date(action[i] + " " + thisHour + ":" + thisMinute + ":" + thisSecond)) : new Date(action[i]);
				testDate = Date.parse(testDate);
				fromDate = thisDate >= testDate ? true : false;
				if (action[i+1] == 0) {
					duration = thisDate >= testDate ? true : false;
				}
				else {
					duration = thisDate == testDate ? true : false;
				}
				if (fromDate && duration) {
					url = action[i+2];
				}
			}
		}
		if (action[1] == 0 && url != "") {
			var params = "";
			var topp = action[13], left = action[14];
			var timeOut = action[16] * 1000;
			if (action[2].length > 0) {
				windowName = action[2];
			}
			else {
				windowName = "newWindow";
			}
			var winWidth = (action[3] > 0 && action[3] <= screen.availWidth) ? action[3] : screen.availWidth;
			var winHeight = (action[4] > 0 && action[4] <= screen.availHeight) ? action[4] : screen.availHeight;
			params += "width=" + winWidth;
			params += ",height=" + winHeight;
			params += ",toolbar=" + (action[5] ? "1" : "0");
			params += ",location=" + (action[6] ? "1" : "0");
			params += ",directories=" + (action[7] ? "1" : "0");
			params += ",status=" + (action[8] ? "1" : "0");
			params += ",menubar=" + (action[9] ? "1" : "0");
			params += ",favorites=" + (action[10] ? "1" : "0");
			params += ",scrollbars=" + (action[11] ? "1" : "0");
			params += ",resizable=" + (action[12] ? "1" : "0");
			params += (window.screenY) ? ",screenY=" + topp + ",screenX=" + left : ",top=" + topp + ",left=" + left;
			DPNewWind = window.open(url,windowName,params);
			if (action[15]) {
				var t = setTimeout("DPCloseWind()", timeOut);
			}
		}
		else if (url != "") {
			var fparams;
			if (action[53].length < 1) {
				window.location.href = url;
			}
			else {
				fparams = eval(action[53] + ".window.location");
				fparams.href = url;
			}
		}
	}
	return;
}
function DPCloseWind() {
	if (DPisIE3) {
		DPNewWind = window.open(DPAction[2],windowName,params);
	}
	if (DPNewWind && !DPNewWind.closed) {
		DPNewWind.close();
	}
	return;
}
function DPVersion() {
	return (navigator.appName.indexOf("Netscape") >= 0 && parseInt(navigator.appVersion.charAt(0)) >= 3)
          || (navigator.appName.indexOf("Explorer") >= 0 && parseInt(navigator.appVersion.charAt(0)) >= 3);
}
// EOF
