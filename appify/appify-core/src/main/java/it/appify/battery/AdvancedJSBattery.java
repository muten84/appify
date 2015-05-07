/*
 * Appify - a tiny frontend framework to build complex mobile apps.
 * 
 * Copyright (C) 2015 Luigi Bifulco Appify is free software: you can
 * redistribute it and/or modify it under the terms of the GNU General Public
 * License as published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 * 
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */
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
