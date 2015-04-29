package it.appify.geolocation;

import it.appify.api.GeoOptions;
import it.appify.api.Geolocation;

public class HTML5Geolocation implements Geolocation {

	private GeolocationJsObject geolocation;

	public HTML5Geolocation(GeoOptions options) {
		this.geolocation = new GeolocationJsObject(options);
	}

	@Override
	public void getCurrentPosition(GeolocationCallback callback) {
		this.geolocation.getCurrentPosition(callback);
	}

	@Override
	public void watchPosition(GeolocationCallback callback) {
		this.geolocation.watchPosition(callback);
	}

	@Override
	public <Service> Service getService() {
		return (Service) this;
	}

}
