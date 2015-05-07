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
package it.appify.geolocation;

import it.appify.api.GeoOptions;
import it.appify.api.Geolocation;

public class HTML5Geolocation implements Geolocation {

	private GeolocationJsObject geolocation;

	public HTML5Geolocation(GeoOptions options) {
		this.geolocation = new GeolocationJsObject(options);
	}

	@Override
	public void getCurrentPosition(GeolocationCallback callback) {
		this.geolocation.getCurrentPosition(callback);
	}

	@Override
	public void watchPosition(GeolocationCallback callback) {
		this.geolocation.watchPosition(callback);
	}

	@Override
	public <Service> Service getService() {
		return (Service) this;
	}

}
