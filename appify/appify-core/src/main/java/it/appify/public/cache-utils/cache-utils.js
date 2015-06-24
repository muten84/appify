// Cache application tools
var contextApp = '/emsmobile';
var masterPage = 'dynamic-emsmobile-offline.html';

function getPathName() {
	if (contextApp == '/') {
		return contextApp + masterPage;
	} else {
		return contextApp + '/' + masterPage;
	}
}

(function() {
	window.cache = window.applicationCache;
	var cache = window.cache;
	var el = false;
	try {
		el = window.parent.document.getElementById("tooltip");
	} catch (err) {

	}
	console.log('cacheEl is: ' + el);
	cache
			.addEventListener(
					"cached",
					function() {
						console
								.log("All resources for this web app have now been downloaded. You can run this application while not connected to the internet");
						if (el) {
							el.innerHTML = 'Aggiornamento riuscito'

							window.parent.location.pathname = getPathName();
						}
					}, false);
	cache.addEventListener("checking", function() {
		console.log("Checking manifest");
		if (el) {
			el.innerHTML = 'Check aggiornamenti';
		}
	}, false);
	cache.addEventListener("downloading", function() {
		console.log("Starting download of cached files");
		if (el) {
			el.innerHTML = 'Inzio il download dei files...';
		}
	}, false);
	cache
			.addEventListener(
					"error",
					function(e) {
						console
								.log("There was an error in the manifest, downloading cached files or you're offline: "
										+ e);
						if (el) {
							el.innerHTML = "Server non ragg. stai per essere rediretto alla versione offline "
						}
						var s = getPathName();
						if (window.parent.location.pathname == getPathName()) {
							console
									.log("Server non ragg. sei gia sulla versione offline");
						} else {
							setTimeout(
									function() {
										window.parent.location.pathname = getPathName();
									}, 1000);
						}

					}, false);
	cache
			.addEventListener(
					"noupdate",
					function() {
						console.log("There was no update needed");
						if (el) {
							el.innerHTML = "Nessun Update stai per essere rediretto alla versione offline "
							window.parent.location.pathname = getPathName();
						}
					}, false);
	cache.addEventListener("progress", function() {
		console.log("Downloading cached files");
		if (el) {
			el.innerHTML = 'Proseguo con il download dei files...';
		}
	}, false);
	cache.addEventListener("updateready", function() {
		cache.swapCache();
		console.log("Updated cache is ready");
		if (el) {
			el.innerHTML = "Ho installato un aggiornamento caricamento..."
		}
		// Even after swapping the cache the currently loaded page won't use it
		// until it is reloaded, so force a reload so it is current.
		window.setTimeout(function() {
			window.location.reload(true);
			console.log("Window reloaded");
		}, 2000)

	}, false);

})();