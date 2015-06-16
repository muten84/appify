// Cache application tools
(function() {
	window.cache = window.applicationCache;
	var cache = window.cache;
	var el = false;
	try{
		el = window.parent.document.getElementById("tooltip");
	}catch(err){
		
	}
	console.log('cacheEl is: '+el);
	cache
			.addEventListener(
					"cached",
					function() {
						console
								.log("All resources for this web app have now been downloaded. You can run this application while not connected to the internet");
						if (el) {
							el.innerHTML = 'All resources for this web app have now been downloaded. You can run this application while not connected to the internet'
							window.parent.location.pathname = '/dynamic-emsmobile-offline.html';
						}
					}, false);
	cache.addEventListener("checking", function() {
		console.log("Checking manifest");
		if (el) {
			el.innerHTML = 'Checking manifest'
		}
	}, false);
	cache.addEventListener("downloading", function() {
		console.log("Starting download of cached files");
		if (el) {
			el.innerHTML = 'Starting download of cached files...'
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
							el.innerHTML = "There was an error in the manifest, downloading cached files or you're offline: "
						}
					}, false);
	cache.addEventListener("noupdate", function() {
		console.log("There was no update needed");
		if (el) {
			el.innerHTML = "There was no update needed"
		    window.parent.location.pathname = '/dynamic-emsmobile-offline.html';	
		}
	}, false);
	cache.addEventListener("progress", function() {
		console.log("Downloading cached files");
		if (el) {
			el.innerHTML = "Downloading cached files"
		}
	}, false);
	cache.addEventListener("updateready", function() {
		cache.swapCache();
		console.log("Updated cache is ready");
		if (el) {
			el.innerHTML = "Updated cache is ready refreshing..."
		}
		// Even after swapping the cache the currently loaded page won't use it
		// until it is reloaded, so force a reload so it is current.
		window.setTimeout(function() {
			window.location.reload(true);
			console.log("Window reloaded");
		}, 2000)

	}, false);

})();