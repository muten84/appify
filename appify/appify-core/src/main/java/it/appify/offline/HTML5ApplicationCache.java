/*
 * Appify - a tiny frontend framework to build complex mobile apps.
 * 
 * Copyright (C) 2015 Luigi Bifulco Appify is free software: you can
 * redistribute it and/or modify it under the terms of the GNU General Public
 * License as published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */
package it.appify.offline;

import it.appify.api.ApplicationCache;
import it.appify.offline.OfflineMonitor.OfflineMonitorListener;
import it.appify.offline.OnlineChecker.CheckOnlineCallback;

import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.EventListener;

public class HTML5ApplicationCache implements ApplicationCache {

	private ApplicationCacheJsObject cache;

	private OnlineChecker checkConnection;

	private OfflineMonitor monitor;

	private boolean started = false;

	public HTML5ApplicationCache() {
		cache = ApplicationCacheJsObject.getApplicationCache();
		checkConnection = new OnlineChecker();
		monitor = new OfflineMonitor(checkConnection);
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

	@Override
	public void getConnetionStatus(final CheckConnectedCallback callback) {
//		if (cache != null) {
//			boolean connected = cache.isOnline();
//			if (connected) {
//				callback.onOnline();
//			} else {
//				callback.onOffline();
//			}
//
//		} else {
			checkConnection.checkOnline(new CheckOnlineCallback() {

				@Override
				public void onOnline() {
					callback.onOnline();

				}

				@Override
				public void onOffline() {
					callback.onOffline();

				}
			});
//		}

	}

	@Override
	public void watchConnectionStatus(final CheckConnectedCallback callback) {
		if (!started) {
			monitor.start(new OfflineMonitorListener() {

				@Override
				public void onOnline() {
					callback.onOnline();

				}

				@Override
				public void onOffline() {
					callback.onOffline();

				}
			});
		}

	}
}
