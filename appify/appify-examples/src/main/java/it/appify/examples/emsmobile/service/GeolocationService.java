package it.appify.examples.emsmobile.service;

import it.appify.annotations.Service;
import it.appify.annotations.Start;
import it.appify.api.Geolocation.GeolocationCallback;
import it.appify.api.Geoposition;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.logging.ConsoleLogger;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;

@Service
public class GeolocationService {

	private WebApp<EmsMobileModel> app;
	
	private long gpsTimestamp;
	
	private long timeout = 10000;

	public GeolocationService(WebApp<EmsMobileModel> app) {
		this.app = app;
		gpsTimestamp = System.currentTimeMillis();
	}

	@Start
	public void startGeolocationService() {
		watchForLocation();
		Scheduler.get().scheduleFixedPeriod(new RepeatingCommand() {

			@Override
			public boolean execute() {
				check();
				return true;
			}
		}, 5000);

	}
	
	protected void watchForLocation() {
		this.app.getGeolocationService().watchPosition(new GeolocationCallback() {
			
			@Override
			public void onPosition(Geoposition position) {
				gpsTimestamp = System.currentTimeMillis();
				ConsoleLogger.getConsoleLogger().log("onPosition geolocation service");
				EmsMobileModel model = app
						.<EmsMobileModel> getCurrentAppState();
				model.setPosition(position);
				model.getBarStatus().setGpsStatus("status-on");
				app.updateAppState(model);
				app.getCurrentPage().popover(
						"gpsStateBtn",
						"Stato GPS",
						position.getCoords().getLatitude() + " "
								+ position.getCoords().getLongitude(),
						"fade");
				
			}
			
			@Override
			public void onError(int code, String msg) {
				gpsTimestamp = System.currentTimeMillis();
				ConsoleLogger.getConsoleLogger().log("onError geolocation service: "+code+" - "+msg);
				EmsMobileModel model = app
						.<EmsMobileModel> getCurrentAppState();
				model.getBarStatus().setGpsStatus("status-off");
				app.updateAppState(model);
				
			}
		});
	}

	protected void check() {
		long now = System.currentTimeMillis();
		long diff = now-gpsTimestamp;
		if(diff>=timeout) {
			ConsoleLogger.getConsoleLogger().log("request new position after timeout: "+diff);
			this.app.getGeolocationService().getCurrentPosition(
				new GeolocationCallback() {

					@Override
					public void onPosition(Geoposition position) {
						gpsTimestamp = System.currentTimeMillis();
						ConsoleLogger.getConsoleLogger().log("onPosition geolocation service");
						EmsMobileModel model = app
								.<EmsMobileModel> getCurrentAppState();
						model.setPosition(position);
						model.getBarStatus().setGpsStatus("status-on");
						app.updateAppState(model);
						app.getCurrentPage().popover(
								"gpsStateBtn",
								"Stato GPS",
								position.getCoords().getLatitude() + " "
										+ position.getCoords().getLongitude(),
								"fade");

					}

					@Override
					public void onError(int code, String msg) {
						gpsTimestamp = System.currentTimeMillis();
						ConsoleLogger.getConsoleLogger().log("onError geolocation service: "+code+" - "+msg);
						EmsMobileModel model = app
								.<EmsMobileModel> getCurrentAppState();
						model.getBarStatus().setGpsStatus("status-off");
						app.updateAppState(model);

					}
				});
			}
		}

}
