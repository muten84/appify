package it.appify.examples.client.controller;

import com.google.gwt.core.shared.GWT;

import it.appify.annotations.Controller;
import it.appify.api.Geolocation.GeolocationCallback;
import it.appify.api.Geoposition;
import it.appify.app.WebApp;

@Controller
public class GeolocationController {

	private WebApp<?> webapp;

	public GeolocationController(WebApp<?> webapp) {
		this.webapp = webapp;
		this.webapp.getGeolocationService().watchPosition(new GeolocationCallback() {

			@Override
			public void onPosition(Geoposition position) {
				GWT.log("New Position: " + position);

			}

			@Override
			public void onError(int code, String msg) {
				
				GWT.log("Position error: " + code + " - " + msg);

			}
		});
	}

}
