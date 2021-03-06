var Standards = { general: { options: { automation: "none" } } };
importScripts("https://epicenterprograms.github.io/standards/behavior/general.js");

self.addEventListener("message", function (message) {
	self.postMessage(0);
	setTimeout(function () {
		self.postMessage(1);
	}, 1000);
	setTimeout(function () {
		self.postMessage(2);
	}, 2000);
	setTimeout(function () {
		self.postMessage(3);
	}, 3000);
	setTimeout(function () {
		self.postMessage(4);
	}, 4000);
	setTimeout(function () {
		console.log(message.data);
		self.postMessage(message.data);
		self.close();  // closes the web worker
	}, 5000);
});
