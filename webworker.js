var Standards = { general: { options: { automation: "none" } } };
importScripts("https://epicenterprograms.github.io/standards/behavior/general.js");

self.addEventListener("message", function (message) {
	self.postMessage(message.data);
});
