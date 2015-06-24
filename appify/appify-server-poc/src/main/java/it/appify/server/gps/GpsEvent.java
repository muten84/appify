package it.appify.server.gps;

import it.appify.server.data.GPSData;

public class GpsEvent {

	protected GPSData gpsData;

	public GpsEvent(GPSData gpsData) {
		this.gpsData = gpsData;
	}

	public GPSData getGpsData() {
		return gpsData;
	}

}
