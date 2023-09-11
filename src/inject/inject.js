let clientX, clientY;
function setup() {
	document.addEventListener("mousemove", (event) => {
		clientX = event.clientX;
		clientY = event.clientY;
	});
	document.addEventListener('keydown', (event) => {
		if (event.code === 'AltLeft' || event.code == 'AltRight') {
			document.elementFromPoint(clientX, clientY).click();
		}
	}, false);
}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		setup();
	}
	}, 10);
});