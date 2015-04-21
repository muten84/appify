package it.appify.api;

public interface Geolocation {

	public static interface GeolocationCallback {
		public void onPosition(Geoposition position);
	}

}
