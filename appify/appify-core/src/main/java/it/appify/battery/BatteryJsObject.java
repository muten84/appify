package it.appify.battery;

public class BatteryJsObject {

	public static interface BatteryCallback {
		public void onBatteryInfo(double level, boolean charging);
	}

	public void getBatteryInfo(BatteryCallback callback) {
		_getBatteryInfo(callback);
	}

	private native void _addEventListener()/*-{
	}-*/;

	private native double _getBatteryInfo(BatteryCallback callback)/*-{
		var that = this;
		navigator
				.getBattery()
				.then(
						function(battery) {
							var level = battery.level;
							var charging = battery.charging;
							callback.@it.appify.battery.BatteryJsObject.BatteryCallback::onBatteryInfo(DZ)(level,charging);
						});
	}-*/;
}
