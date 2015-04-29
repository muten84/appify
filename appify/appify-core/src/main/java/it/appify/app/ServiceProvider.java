package it.appify.app;

import it.appify.api.ApplicationCache;
import it.appify.api.Battery;
import it.appify.api.GeoOptions;
import it.appify.api.Geolocation;
import it.appify.battery.AdvancedJSBattery;
import it.appify.geolocation.HTML5Geolocation;
import it.appify.offline.HTML5ApplicationCache;

public class ServiceProvider {
	public final static int BATTERY = 0;
	public final static int GEOLOCATION = 1;
	public final static int APPLICATION_CACHE = 2;
	public final static int STORAGE = 3;

	private static Geolocation geolocation;
	private static Battery battery;
	private static ApplicationCache applicationCache;

	public static ApplicationCache createApplicationCache() {
		if (applicationCache == null) {
			applicationCache = new HTML5ApplicationCache();
		}
		return applicationCache;
	}

	public static Battery createBatteryService() {
		if (battery == null) {
			battery = new AdvancedJSBattery();
		}
		return battery;

	}

	public static Geolocation createGeoLocationService(boolean hiAccuracy, int maximumAge, long timeout) {
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
