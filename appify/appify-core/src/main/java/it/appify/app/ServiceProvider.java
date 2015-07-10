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
package it.appify.app;

import it.appify.api.ApplicationCache;
import it.appify.api.Battery;
import it.appify.api.GeoOptions;
import it.appify.api.Geolocation;
import it.appify.api.ScrOrientation;
import it.appify.battery.AdvancedJSBattery;
import it.appify.geolocation.HTML5Geolocation;
import it.appify.geolocation.WsGeolocation;
import it.appify.offline.HTML5ApplicationCache;
import it.appify.screenorientation.WebScreenOrientation;
import it.appify.screenorientation.WebScreenOrientationImpl;

import com.google.gwt.dom.client.Element;

public class ServiceProvider {
	public final static int BATTERY = 0;
	public final static int GEOLOCATION = 1;
	public final static int APPLICATION_CACHE = 2;
	public final static int STORAGE = 3;

	private static Geolocation geolocation;
	private static Battery battery;
	private static ApplicationCache applicationCache;
	private static ScrOrientation<Element> webScreenOrientation;

	public static ApplicationCache createApplicationCache(String version) {
		if (applicationCache == null) {
			applicationCache = new HTML5ApplicationCache(version);
		}
		return applicationCache;
	}

	public static WebScreenOrientation createWebScreenOrientation() {
		if (webScreenOrientation == null) {
			webScreenOrientation = new WebScreenOrientationImpl();
		}
		return (WebScreenOrientation) webScreenOrientation;
	}

	public static Battery createBatteryService() {
		if (battery == null) {
			battery = new AdvancedJSBattery();
		}
		return battery;

	}

	public static Geolocation createWsGeolocation() {
		if (geolocation == null) {
			geolocation = new WsGeolocation();
		}
		return geolocation;
	}

	public static Geolocation createGeoLocationService(boolean hiAccuracy,
			int maximumAge, long timeout) {
		if (geolocation == null) {
			GeoOptions options = new GeoOptions();
			options.setEnableHighAccuracy(hiAccuracy);
			options.setMaximumAge(maximumAge);
			options.setTimeout(timeout);
			geolocation = new HTML5Geolocation(options);
		}
		return geolocation;

	}

}
