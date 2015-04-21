package it.appify.offline;

import it.appify.api.ApplicationCache;

import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.EventListener;

public class HTML5ApplicationCache implements ApplicationCache {

	private ApplicationCacheJsObject cache;

	public HTML5ApplicationCache() {
		cache = ApplicationCacheJsObject.getApplicationCache();
	}

	@Override
	public void addHandler(String type, final Handler h) {
		EventListener listener = new EventListener() {

			@Override
			public void onBrowserEvent(Event event) {
				h.onEvent(event.getType(), "cache");

			}
		};
		// TODO: understand if there is need to usae capture flag
		// for defining "capture" or "bubble" behavior
		cache.addEventListener(type, listener, false);

	}

	@Override
	public void update() throws Exception {
		cache.update();

	}

	@Override
	public void swapCache() throws Exception {
		cache.swapCache();

	}

	@Override
	public String getStatus() {
		int status = cache.getStatus();
		return Util.getCacheStatus(status);

	}

}
