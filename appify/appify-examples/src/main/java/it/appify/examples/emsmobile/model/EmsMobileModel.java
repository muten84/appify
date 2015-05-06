package it.appify.examples.emsmobile.model;

import it.appify.api.BatteryStatus;
import it.appify.api.Geoposition;
import it.appify.api.Screen;
import it.appify.api.ScreenOrientation;

import java.io.Serializable;

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

	public EmsMobileModel() {

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

}
