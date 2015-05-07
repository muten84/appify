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

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.GWT.UncaughtExceptionHandler;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.Event;
import com.google.gwt.user.client.EventListener;

public class ApplicationCacheJsObject extends JavaScriptObject {

	// getStatus() values:
	public static final short UNCACHED = 0;
	public static final short IDLE = 1;
	public static final short CHECKING = 2;
	public static final short DOWNLOADING = 3;
	public static final short UPDATEREADY = 4;
	public static final short OBSOLETE = 5;

	// event types for addEventListener():

	protected ApplicationCacheJsObject() {
	}

	/**
	 * Returns <code>true</code> if the Application Cache API is supported on
	 * the running platform.
	 */
	public final static native boolean isSupported() /*-{
		return typeof $wnd.applicationCache != "undefined";
	}-*/;

	public final static native ApplicationCacheJsObject getApplicationCache() /*-{
		return $wnd.cache;
	}-*/;

	@SuppressWarnings("unused")
	private final static void handleCacheEvents(EventListener listener,
			Event event) {
		UncaughtExceptionHandler ueh = GWT.getUncaughtExceptionHandler();
		if (ueh != null) {
			try {
				listener.onBrowserEvent(event);
			} catch (Throwable t) {
				ueh.onUncaughtException(t);
			}
		} else {
			listener.onBrowserEvent(event);
		}
	}

	public final native void addEventListener(String type,
			EventListener listener, boolean useCapture) /*-{
			$wnd.cache.addEventListener(
			  type,
			  function(event) {
			    @it.appify.offline.ApplicationCacheJsObject::handleCacheEvents(Lcom/google/gwt/user/client/EventListener;Lcom/google/gwt/user/client/Event;) (listener, event);
			  },
			  useCapture
			);
		}-*/;

	public final native void update() /*-{
		$wnd.cache.update();
	}-*/;

	public final native void swapCache() /*-{
		$wnd.cache.swapCache();
	}-*/;

	public final native int getStatus() /*-{
		return $wnd.cache.status;
	}-*/;

	public final native boolean isOnline() /*-{
		return $wnd.navigator.onLine;
	}-*/;

}
