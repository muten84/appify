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
import it.appify.api.Geolocation;
import it.appify.api.Geoposition;

import org.realityforge.gwt.websockets.client.WebSocket;
import org.realityforge.gwt.websockets.client.WebSocketListener;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsonUtils;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.typedarrays.shared.ArrayBuffer;

public class WsGeolocation implements Geolocation {
	WebSocket webSocket = null;

	private GeolocationCallback callback;

	private Geoposition lastPosition;

	private String currentRequest = null;

	@Override
	public <Service> Service getService() {
		return (Service) this;
	}

	public WsGeolocation() {
		checkConnected();
	}

	private void checkConnected() {
		if (webSocket == null) {
			this.connect();
		} else {
			GWT.log("WebSocket just initialized");
		}
	}

	@Override
	public void getCurrentPosition(GeolocationCallback callback) {
		this.callback = callback;
		checkConnected();
		if (webSocket.isConnected()) {
			webSocket.send("getCurrentPosition");
		} else {
			GWT.log("web socket not connected");
		}
	}

	@Override
	public void watchPosition(GeolocationCallback callback) {
		this.currentRequest = "watchPosition";
		this.callback = callback;
		checkConnected();
		if (webSocket.isConnected()) {
			try {
				webSocket.send(currentRequest);
			} catch (Exception e) {

			}
		} else {
			GWT.log("web socket not connected");
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

	protected void onPositionSuccess(JavaScriptObject jsObj) {
		JSONObject obj = new JSONObject(jsObj);
		long timestamp = Long.parseLong(""
				+ obj.get("timestamp").isNumber().doubleValue());
		double latitude = obj.get("coords").isObject().get("latitude")
				.isNumber().doubleValue();
		double longitude = obj.get("coords").isObject().get("longitude")
				.isNumber().doubleValue();
		JSONValue jsValue = obj.get("coords").isObject().get("accuracy");
		double accuracy = jsValue != null ? jsValue.isNumber().doubleValue()
				: 0;

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
	}

	protected void connect() {
		webSocket = WebSocket.newWebSocketIfSupported();
		webSocket.setListener(new WebSocketListener() {

			@Override
			public void onOpen(WebSocket webSocket) {
				GWT.log("onOpen: " + webSocket.isConnected());
				if (currentRequest != null) {
					if (currentRequest.equals("watchPosition")) {
						watchPosition(WsGeolocation.this.callback);
						currentRequest = null;
					}
				}

			}

			@Override
			public void onMessage(WebSocket webSocket, ArrayBuffer data) {
				GWT.log("onMessage ArrayBuffer: " + data);

			}

			@Override
			public void onMessage(WebSocket webSocket, String data) {
				GWT.log("RECEIVED: " + data);
				JavaScriptObject jsonObj = JsonUtils.safeEval(data);
				onPositionSuccess(jsonObj);
				// parse string
			}

			@Override
			public void onError(WebSocket webSocket) {
				GWT.log("onError: ");
				// onPositionError(errorCode, msg);

			}

			@Override
			public void onClose(WebSocket webSocket, boolean wasClean,
					int code, String reason) {
				GWT.log("onClose: " + wasClean + " - " + code + " - " + reason);

			}
		});
		webSocket.connect("ws://127.0.0.1:8080//websocket");
	}

}
