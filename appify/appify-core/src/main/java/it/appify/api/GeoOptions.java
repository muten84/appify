package it.appify.api;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class GeoOptions implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -9151175179014870808L;

	private boolean enableHighAccuracy;

	private long timeout;

	private long maximumAge;

	public GeoOptions() {

	}

	public boolean isEnableHighAccuracy() {
		return enableHighAccuracy;
	}

	public void setEnableHighAccuracy(boolean enableHighAccuracy) {
		this.enableHighAccuracy = enableHighAccuracy;
	}

	public long getTimeout() {
		return timeout;
	}

	public void setTimeout(long timeout) {
		this.timeout = timeout;
	}

	public long getMaximumAge() {
		return maximumAge;
	}

	public void setMaximumAge(long maximumAge) {
		this.maximumAge = maximumAge;
	}

}
