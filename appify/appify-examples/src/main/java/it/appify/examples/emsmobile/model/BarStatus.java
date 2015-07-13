package it.appify.examples.emsmobile.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class BarStatus implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4659929034237312640L;

	private String gpsStatus;
	private String batteryStatus;
	private String connectionStatus;
	private String cacheStatus;
	private String vehicleCode;
	private String checkInDate;
	

	public BarStatus() {
		// this.gpsStatus = "btn btn-nav pull-right";
		// this.batteryStatus = "btn btn-nav pull-right";
		// this.connectionStatus = "btn btn-nav pull-right";
		this.gpsStatus = "status-idle";
		this.batteryStatus = "status-idle";
		this.connectionStatus = "status-idle";
		this.cacheStatus = "";
	}

	public String getGpsStatus() {
		return gpsStatus;
	}

	public void setGpsStatus(String gpsStatus) {
		this.gpsStatus = gpsStatus;
	}

	public String getBatteryStatus() {
		return batteryStatus;
	}

	public void setBatteryStatus(String batteryStatus) {
		this.batteryStatus = batteryStatus;
	}

	public String getConnectionStatus() {
		return connectionStatus;
	}

	public void setConnectionStatus(String connectionStatus) {
		this.connectionStatus = connectionStatus;
	}

	public String getVehicleCode() {
		return vehicleCode;
	}

	public void setVehicleCode(String vehicleCode) {
		this.vehicleCode = vehicleCode;
	}

	public String getCacheStatus() {
		return cacheStatus;
	}

	public void setCacheStatus(String cacheStatus) {
		this.cacheStatus = cacheStatus;
	}

	public String getCheckInDate() {
		return checkInDate;
	}

	public void setCheckInDate(String checkInDate) {
		this.checkInDate = checkInDate;
	}
	
	
	
	

}
