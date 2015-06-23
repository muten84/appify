'use strict';
//this.addEventListener('install', function(event) {
//	console.log("service worker install");
//});
//
//this.addEventListener('fetch', function(event) {
//	console.log("service worker fetch");
//});

console.log('importing scripts...');
importScripts('../node_modules/sw-toolbox/sw-toolbox.js');
console.log('scripts imported...');

self.addEventListener('install', function(event) {
	  self.skipWaiting();
	});

	self.addEventListener('activate', function(event) {
	  event.waitUntil(self.clients.claim());
	});

toolbox.options.debug = true;


//console.log('declaring default handler...');
//var myHandler = function(request, values, options) {
//	 console.log('request: '+request);
//	 console.log('values: '+values);
//	 console.log('options: '+options);
//}

//console.log('default handler initialized...');
//toolbox.router.default = myHandler;

console.log('initializing router toolbox: '+toolbox);
//For some common cases Service Worker Toolbox provides a built-in handler
//https://github.com/pillarjs/path-to-regexp
toolbox.router.get('/', toolbox.networkFirst);
toolbox.router.get(':resource', toolbox.networkFirst);
toolbox.router.get(':subdomain/:resource', toolbox.networkFirst);
toolbox.router.get(':domain/:subdomain/:resource', toolbox.networkFirst);
toolbox.router.get(':domain/:subdomain/:folder/:resource', toolbox.networkFirst);
toolbox.router.get(':domain/:subdomain/:folder/:subfolder/:resource', toolbox.networkFirst);
//toolbox.router.get('to-cache/:pages/:page', toolbox.networkFirst);
console.log('router toolbox initialized');

//toolbox.precache(['/to-cache/', '/site.css', '/images/logo.png']);