package it.appify.api;

public interface Battery {

	public static interface BatteryStatusCallback {
		public void onBatteryStatus(BatteryStatus currentStatus);
	}

	public static interface BatteryChangeCallback {
		public void onBatteryChange(BatteryStatus newStatus);
	}

	public void getBatteryStatus(BatteryStatusCallback callback);

	public void watchBatteryStatus(BatteryChangeCallback callback);

}
