package it.appify.api;

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
/**
 * Geolocation interface
 * 
 * @author Luigi
 *
 */
public interface Geolocation extends IsService {

	public static interface GeolocationCallback {
		public static final int PERMISSION_DENIED = 1;
		public static final int PERMISSION_UNAVAILABLE = 2;
		public static final int TIMEOUT = 3;

		public void onPosition(Geoposition position);

		public void onError(int code, String msg);
	}

	/**
	 * Method for retrieve the current position
	 * 
	 * @param callback
	 */
	public void getCurrentPosition(GeolocationCallback callback);

	/**
	 * If you want to receive updates on position change you have to call this
	 * method
	 * 
	 * @param callback
	 */
	public void watchPosition(GeolocationCallback callback);

}
