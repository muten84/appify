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
