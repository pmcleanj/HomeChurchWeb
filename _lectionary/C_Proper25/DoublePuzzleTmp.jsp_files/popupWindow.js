function popupWindow(url,width,height){
	// set the width and height of the playlist popup window to be created
	popupWidth = width;
	popupHeight = height;
	popupURL = url;
	// attempt to determine the width and height of the user's current window - default to 800x600
	windowWidth = 800;
	windowHeight = 600;
	try {
		if (self.innerWidth) {
			windowWidth = self.innerWidth;
			windowHeight = self.innerHeight;
		} else if (parent.document.documentElement && parent.document.documentElement.clientWidth) {
			windowWidth = parent.document.documentElement.clientWidth;
			windowHeight = parent.document.documentElement.clientHeight;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			windowWidth = document.documentElement.clientWidth;
			windowHeight = document.documentElement.clientHeight;
		} else if (parent.document.body) {
			windowWidth = parent.document.body.clientWidth;
			windowHeight = parent.document.body.clientHeight;
		} else if (document.body) {
			windowWidth = document.body.clientWidth;
			windowHeight = document.body.clientHeight;
		}
	} catch(err) {
		windowWidth = 800;
		windowHeight = 600;
	}

	// determine the position of our popup window based on the current window size
	popupLeft = (windowWidth/2)-(popupWidth/2);
	popupTop = (windowHeight/2)-(popupHeight/2);

	myUrl = popupURL;
	myTarget = "refPopupWindow";
	myArgs = 'width='+popupWidth+',height='+popupHeight+',location=0,menubar=0,resizable=1,scrollbars=1,status=0,titlebar=1,toolbar=0,hotkeys=0,top='+popupTop+',left='+popupLeft;
	refPopupWindow = window.open( myUrl, myTarget, myArgs );
	refPopupWindow.focus();
}

function popupWindowWithToolBar(url,width,height){
	// set the width and height of the playlist popup window to be created
	popupWidth = width;
	popupHeight = height;
	popupURL = url;
	// attempt to determine the width and height of the user's current window - default to 800x600
	windowWidth = 800;
	windowHeight = 600;
	try {
		if (self.innerWidth) {
			windowWidth = self.innerWidth;
			windowHeight = self.innerHeight;
		} else if (parent.document.documentElement && parent.document.documentElement.clientWidth) {
			windowWidth = parent.document.documentElement.clientWidth;
			windowHeight = parent.document.documentElement.clientHeight;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			windowWidth = document.documentElement.clientWidth;
			windowHeight = document.documentElement.clientHeight;
		} else if (parent.document.body) {
			windowWidth = parent.document.body.clientWidth;
			windowHeight = parent.document.body.clientHeight;
		} else if (document.body) {
			windowWidth = document.body.clientWidth;
			windowHeight = document.body.clientHeight;
		}
	} catch(err) {
		windowWidth = 800;
		windowHeight = 600;
	}

	// determine the position of our popup window based on the current window size
	popupLeft = (windowWidth/2)-(popupWidth/2);
	popupTop = (windowHeight/2)-(popupHeight/2);

	myUrl = popupURL;
	myTarget = "refPopupWindow";
	myArgs = 'width='+popupWidth+',height='+popupHeight+',location=0,menubar=0,resizable=1,scrollbars=1,status=0,titlebar=1,toolbar=0,hotkeys=0,top='+popupTop+',left='+popupLeft;
	refPopupWindow = window.open( myUrl, myTarget, myArgs );
	refPopupWindow.focus();
}