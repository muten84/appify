package it.appify.examples.emsmobile.model;

import it.appify.api.BatteryStatus;
import it.appify.api.Geoposition;
import it.appify.api.Screen;
import it.appify.api.ScreenOrientation;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class EmsMobileModel implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3307757463809870356L;

	private BatteryStatus batteryStatus;
	private Geoposition position;
	private Screen screen;
	private ScreenOrientation screenOrientation;
	private String dumpUrl;
	private List<Item> items;
	private List<String> items2;
	private BarStatus barStatus;
	private String vehicleCode;
	private String checkInLabel;

	public EmsMobileModel() {
		barStatus = new BarStatus();
		checkInLabel = "Inizio Turno";
		items = Arrays.asList(new Item[] { new Item("1", "Name1"),
				new Item("2", "Name2") });
		items2 = Arrays.asList(new String[] { "Item 1", "Item 2", "Item 3" });
	}

	public BatteryStatus getBatteryStatus() {
		return batteryStatus;
	}

	public void setBatteryStatus(BatteryStatus batteryStatus) {
		this.batteryStatus = batteryStatus;
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

	public List<Item> getItems() {
		return items;
	}

	public void setItems(List<Item> items) {
		this.items = items;
	}

	public List<String> getItems2() {
		return items2;
	}

	public void setItems2(List<String> items2) {
		this.items2 = items2;
	}

	public BarStatus getBarStatus() {
		return barStatus;
	}

	public void setBarStatus(BarStatus barStatus) {
		this.barStatus = barStatus;
	}

	public String getVehicleCode() {
		return vehicleCode;
	}

	public void setVehicleCode(String vehicleCode) {
		this.vehicleCode = vehicleCode;
	}

	public String getCheckInLabel() {
		return checkInLabel;
	}

	public void setCheckInLabel(String checkInLabel) {
		this.checkInLabel = checkInLabel;
	}

}
