package it.appify.api;

public class BatteryStatus {

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
