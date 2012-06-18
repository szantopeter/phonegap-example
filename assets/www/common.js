// Call onDeviceReady when Cordova is loaded.
//
// At this point, the document has loaded but cordova-1.8.1.js has not.
// When Cordova is loaded and talking with the native device,
// it will call the event `deviceready`.
//

function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onMenuKeyDown() {
	window.location = "menu.html";
}

function onSearchKeyDown() {
	window.location = "google.html";
}

// Cordova is loaded and it is now safe to make calls Cordova methods
//
function onDeviceReady() {
	// Now safe to use the Cordova API

	document.addEventListener("menubutton", onMenuKeyDown, false);


	document.addEventListener("searchbutton", onSearchKeyDown, false);

}

$(document).ready(function() {
	onLoad();
});
