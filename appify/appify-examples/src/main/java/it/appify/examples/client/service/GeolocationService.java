package it.appify.examples.client.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.api.Geolocation.GeolocationCallback;
import it.appify.api.Geoposition;
import it.appify.app.WebApp;
import it.appify.examples.client.model.AppModel;
import it.appify.logging.ConsoleLogger;

@Service(name="examples.GeolocationService")
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
						ConsoleLogger.getConsoleLogger().log("New Position: " + position);
						AppModel model = webapp.<AppModel> getCurrentAppState();
						model.setPosition(position);
						webapp.updateAppState((AppModel) model);
						webapp.getStorageService().store(
								AppModel.class.toString(), model);
					}

					@Override
					public void onError(int code, String msg) {

						ConsoleLogger.getConsoleLogger().log("Position error: " + code + " - " + msg);

					}
				});
	}

}
