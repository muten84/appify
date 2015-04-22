package it.appify.api;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class Coordinates implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7037176536443891321L;

	private int accuracy;

	private int altitude;

	private int altitudeAccuracy;

	private int heading;

	private double latitude;

	private double longitude;

	private int speed;

	public Coordinates() {

	}

	public int getAccuracy() {
		return accuracy;
	}

	public void setAccuracy(int accuracy) {
		this.accuracy = accuracy;
	}

	public int getAltitude() {
		return altitude;
	}

	public void setAltitude(int altitude) {
		this.altitude = altitude;
	}

	public int getAltitudeAccuracy() {
		return altitudeAccuracy;
	}

	public void setAltitudeAccuracy(int altitudeAccuracy) {
		this.altitudeAccuracy = altitudeAccuracy;
	}

	public int getHeading() {
		return heading;
	}

	public void setHeading(int heading) {
		this.heading = heading;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		this.speed = speed;
	}

	@Override
	public String toString() {
		return "Coordinates [accuracy=" + accuracy + ", altitude=" + altitude + ", altitudeAccuracy=" + altitudeAccuracy + ", heading=" + heading + ", latitude=" + latitude + ", longitude=" + longitude + ", speed=" + speed + "]";
	}

}
