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

import it.appify.api.Coordinates;
import it.appify.api.GeoOptions;
import it.appify.api.Geolocation.GeolocationCallback;
import it.appify.api.Geoposition;

import com.github.nmorel.gwtjackson.client.ObjectMapper;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsonUtils;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.json.client.JSONObject;

public class GeolocationJsObject {

	private GeolocationBeanMapper mapper;

	private GeoOptionsBeanMapper optionsMapper;

	// TODO: valutare la necessità di mantenere una lista di callback per più
	// richieste
	// oppure redere la richiesta idempotente (il primo che risponde libera la
	// callback)
	private GeolocationCallback callback;

	private Geoposition lastPosition;

	private GeoOptions options;

	private int watchId = -1;

	public static interface GeolocationBeanMapper extends
			ObjectMapper<Geoposition> {
	}

	public static interface GeoOptionsBeanMapper extends
			ObjectMapper<GeoOptions> {
	}

	public GeolocationJsObject(GeoOptions options) {
		mapper = GWT.create(GeolocationBeanMapper.class);
		optionsMapper = GWT.create(GeoOptionsBeanMapper.class);
		this.options = options;
	}

	public GeolocationJsObject() {
		this(null);
	}

	public static native final JavaScriptObject getGeolocation()/*-{
		return $wnd.navigator.geolocation;
	}-*/;

	protected void onPositionSuccess(JavaScriptObject position) {
		String positionString = JsonUtils.stringify(position);
		GWT.log("position info is: " + positionString);
		JavaScriptObject jsObj = JsonUtils.safeEval(positionString);
		JSONObject obj = new JSONObject(jsObj);
		long timestamp = Long.parseLong(""
				+ obj.get("timestamp").isNumber().doubleValue());
		double latitude = obj.get("coords").isObject().get("latitude")
				.isNumber().doubleValue();
		double longitude = obj.get("coords").isObject().get("longitude")
				.isNumber().doubleValue();
		double accuracy = obj.get("coords").isObject().get("accuracy")
				.isNumber().doubleValue();

		Geoposition positionObj = new Geoposition();
		positionObj.setTimestamp(timestamp);
		Coordinates coords = new Coordinates();
		coords.setLatitude(latitude);
		coords.setLongitude(longitude);
		coords.setAccuracy((int) accuracy);
		positionObj.setCoords(coords);
		if (this.callback != null) {
			lastPosition = positionObj;
			this.callback.onPosition(positionObj);
		}
		// non deregistro la callback se non ho nessun watcher in ascolto
		if (watchId < 0) {
			this.callback = null;
		}
	}

	protected void onPositionError(int errorCode, String msg) {
		if (this.callback != null) {
			this.callback.onError(errorCode, msg);
		}
		// TODO: on position error if watch id is >0 do a claerWatch and notify
		// to the callback to re-register to the
		// geolocation
		this.callback = null;
	}

	public void getCurrentPosition(GeolocationCallback callback) {
		GWT.log("getCurrentPosition .. " + callback);
		// if (this.callback != null && lastPosition !=null) {
		// // libero la callback pendente con l'ultime posizione e registro la
		// nuova
		// callback.onPosition(lastPosition);
		// }
		this.callback = callback;

		JavaScriptObject geoOpt = JsonUtils.safeEval("{}");
		if (this.options != null) {
			String json = optionsMapper.write(this.options);
			geoOpt = JsonUtils.safeEval(json);
		}

		_getCurrentPosition(geoOpt);
	}

	public void watchPosition(GeolocationCallback callback) {
		GWT.log("watchPosition .. " + callback);
		this.callback = callback;
		JavaScriptObject geoOpt = null;
		if (this.options != null) {
			String json = optionsMapper.write(this.options);
			geoOpt = JsonUtils.safeEval(json);
		}
		if (watchId < 0) {
			watchId = _watchPosition(geoOpt);
		} else {
			// TODO: clear watch??? and renew subscription
		}
	}

	public void clearWatch() {
		if (this.watchId > 0) {
			_clearWatch(this.watchId);
			this.watchId = -1;
		}

	}

	private native final int _clearWatch(int watchId)/*-{
		console.log('_clearWatch');
		navigator.geolocation.clearWatch(watchId);
	}-*/;

	private native final int _watchPosition(JavaScriptObject options)/*-{
		console.log(' _watchPosition');
		var that = this;
		return $wnd.navigator.geolocation
				.watchPosition(
						function(position) {
							that.@it.appify.geolocation.GeolocationJsObject::onPositionSuccess(Lcom/google/gwt/core/client/JavaScriptObject;)(position);
						},
						function(error) {
							that.@it.appify.geolocation.GeolocationJsObject::onPositionError(ILjava/lang/String;)(error.code,error.message);
						}, options);
	}-*/;

	private native final void _getCurrentPosition(JavaScriptObject options)/*-{
		console.log(' _getCurrentPosition');
		var that = this;
		$wnd.navigator.geolocation
				.getCurrentPosition(
						function(position) {
							that.@it.appify.geolocation.GeolocationJsObject::onPositionSuccess(Lcom/google/gwt/core/client/JavaScriptObject;)(position);
						},
						function(error) {
							that.@it.appify.geolocation.GeolocationJsObject::onPositionError(ILjava/lang/String;)(error.code,error.message);
						}, options);
	}-*/;

}
