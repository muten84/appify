package it.appify.api;

import it.appify.api.Geolocation.GeolocationCallback;

public interface Geolocation {

	public static interface GeolocationCallback {
		public static final int PERMISSION_DENIED = 1;
		public static final int PERMISSION_UNAVAILABLE = 2;
		public static final int TIMEOUT = 3;

		public void onPosition(Geoposition position);

		public void onError(int code, String msg);
	}

	public void getCurrentPosition(GeolocationCallback callback);

	public void watchPosition(GeolocationCallback callback);

}
