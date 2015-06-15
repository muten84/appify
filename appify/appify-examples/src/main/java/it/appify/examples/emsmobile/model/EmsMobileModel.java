package it.appify.examples.emsmobile.model;

import it.appify.api.BatteryStatus;
import it.appify.api.Geoposition;
import it.appify.api.Screen;
import it.appify.api.ScreenOrientation;
import it.appify.api.Storable;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class EmsMobileModel implements Serializable, Storable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3307757463809870356L;

	private BatteryStatus batteryStatusObject;
	private Geoposition position;
	private Screen screen;
	private ScreenOrientation screenOrientation;
	private String dumpUrl;
	private BarStatus barStatus;
	private String checkInLabel;
	private Activation activation;
	private List<Section> vehicles;
	private String searchText;
	private long timestamp;

	public EmsMobileModel() {
		activation = new Activation();
		barStatus = new BarStatus();
		checkInLabel = "Inizio Turno";
		vehicles = new ArrayList<Section>();
		searchText = "";
	}

	public BatteryStatus getBatteryStatusObject() {
		return batteryStatusObject;
	}

	public void setBatteryStatusObject(BatteryStatus batteryStatusObject) {
		this.batteryStatusObject = batteryStatusObject;
	}

	public Geoposition getPosition() {
		return position;
	}

	public void setPosition(Geoposition position) {
		this.position = position;
	}

	public Screen getScreen() {
		return screen;
	}

	public void setScreen(Screen screen) {
		this.screen = screen;
	}

	public ScreenOrientation getScreenOrientation() {
		return screenOrientation;
	}

	public void setScreenOrientation(ScreenOrientation screenOrientation) {
		this.screenOrientation = screenOrientation;
	}

	public String getDumpUrl() {
		return dumpUrl;
	}

	public void setDumpUrl(String dumpUrl) {
		this.dumpUrl = dumpUrl;
	}

	public BarStatus getBarStatus() {
		return barStatus;
	}

	public void setBarStatus(BarStatus barStatus) {
		this.barStatus = barStatus;
	}

	public String getCheckInLabel() {
		return checkInLabel;
	}

	public void setCheckInLabel(String checkInLabel) {
		this.checkInLabel = checkInLabel;
	}

	public Activation getActivation() {
		return activation;
	}

	public void setActivation(Activation activation) {
		this.activation = activation;
	}

	public List<Section> getVehicles() {
		return vehicles;
	}

	public void setVehicles(List<Section> vehicles) {
		this.vehicles = vehicles;
	}

	public String getSearchText() {
		return searchText;
	}

	public void setSearchText(String searchText) {
		this.searchText = searchText;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}
	
	
	public boolean hasTurn() {
		return getBarStatus().getVehicleCode() != null;
	}
	
	public boolean hasActivation() {
		return (getActivation() != null && getActivation().getEmergencyId()!=null && !getActivation().getEmergencyId().isEmpty());
	}
	
	
	

}
