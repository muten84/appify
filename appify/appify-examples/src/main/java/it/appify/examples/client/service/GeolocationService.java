package it.appify.examples.client.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.api.Geolocation.GeolocationCallback;
import it.appify.api.Geoposition;
import it.appify.app.WebApp;
import it.appify.examples.client.model.AppModel;

import com.google.gwt.core.shared.GWT;

@Service
public class GeolocationService {

	private WebApp<AppModel> webapp;

	public GeolocationService(final WebApp<AppModel> webapp) {
		this.webapp = webapp;

	}

	@Start
	public void start() {
		this.webapp.getGeolocationService().watchPosition(
				new GeolocationCallback() {

					@Override
					public void onPosition(Geoposition position) {
						GWT.log("New Position: " + position);
						AppModel model = webapp.<AppModel> getCurrentAppState();
						model.setPosition(position);
						webapp.updateAppState((AppModel) model);
						webapp.getStorageService().store(
								AppModel.class.toString(), model);
					}

					@Override
					public void onError(int code, String msg) {

						GWT.log("Position error: " + code + " - " + msg);

					}
				});
	}

}
