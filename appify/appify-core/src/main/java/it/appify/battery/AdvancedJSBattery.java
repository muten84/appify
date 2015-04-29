package it.appify.battery;

import it.appify.api.Battery;
import it.appify.api.BatteryStatus;
import it.appify.battery.BatteryJsObject.BatteryCallback;

public class AdvancedJSBattery implements Battery {

	private BatteryJsObject batteryObj;

	public AdvancedJSBattery() {
		batteryObj = new BatteryJsObject();
	}

	@Override
	public void getBatteryStatus(final BatteryStatusCallback callback) {
		batteryObj.getBatteryInfo(new BatteryCallback() {

			@Override
			public void onBatteryInfo(double level, boolean charging) {
				BatteryStatus status = new BatteryStatus();
				status.setCharging(charging);
				status.setLevel(level);
				callback.onBatteryStatus(status);

			}
		});

	}

	@Override
	public void watchBatteryStatus(BatteryChangeCallback callback) {
		// TODO Auto-generated method stub

	}

	@Override
	public <Service> Service getService() {
		return (Service) this;
	}

}
