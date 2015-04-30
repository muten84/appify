package it.appify.api;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect
public class BatteryStatus implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -605402352986631188L;

	private boolean charging;

	private double level;

	public boolean isCharging() {
		return charging;
	}

	public void setCharging(boolean charging) {
		this.charging = charging;
	}

	public double getLevel() {
		return level;
	}

	public void setLevel(double level) {
		this.level = level;
	}

	@Override
	public String toString() {
		return "BatteryStatus [charging=" + charging + ", level=" + level + "]";
	}

}
